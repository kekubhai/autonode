import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// Force dynamic rendering for OAuth callbacks
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    
    // This is a Discord OAuth callback
    if (code && state === 'discord') {
      // Handle Discord OAuth callback
      // Redirect to connections page with success
      return NextResponse.redirect(new URL('/connections?success=discord', req.url));
    }
    
    return NextResponse.json({ message: "Discord callback processed" }, { status: 200 });
  } catch (error) {
    console.error("Discord callback error:", error);
    return NextResponse.redirect(new URL('/connections?error=discord', req.url));
  }
}
