import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

// Handle GET request (optional)
export async function GET() {
  return NextResponse.json({ message: "Use POST to store user data" }, { status: 200 });
}

// Handle POST request (store user in DB)
export async function POST() {
  try {
    // Get Clerk User ID
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized: No user found" }, { status: 401 });
    }

    // Fetch user details from Clerk API
    const clerkResponse = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
      headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
    });

    if (!clerkResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch user data from Clerk" }, { status: 500 });
    }

    const clerkUser = await clerkResponse.json();

    // Upsert user in Prisma (create if not exists, update if exists)
    const user = await db.user.upsert({
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

    return NextResponse.json({ message: "User stored in database", user }, { status: 200 });
  } catch (error) {
    console.error("Error storing user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
