import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getAuth } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) :Promise<void> {
  try {
    
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: No user found" });
    }

    // Fetch user details from Clerk API
    const clerkResponse = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
      headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
    });

    if (!clerkResponse.ok) {
      return res.status(500).json({ error: "Failed to fetch user data from Clerk" });
    }

    const clerkUser = await clerkResponse.json();

    // Upsert user in Prisma (create if not exists, update if exists)
    const user = await prisma.user.upsert({
      where: { clerkId: userId }, // Using clerkId as the unique identifier
      update: {
        email: clerkUser.email_addresses[0].email_address,
        name: `${clerkUser.first_name} ${clerkUser.last_name}`,
        profileImage: clerkUser.image_url,
      },
      create: {
        clerkId: userId,
        email: clerkUser.email_addresses[0].email_address,
        name: `${clerkUser.first_name} ${clerkUser.last_name}`,
        profileImage: clerkUser.image_url,
      },
    });

    return res.status(200).json({ message: "User stored in database", user });
  } catch (error) {
    console.error("Error storing user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
