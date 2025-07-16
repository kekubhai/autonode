import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// Force dynamic rendering for OAuth callbacks
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');
    
    // This is a Slack OAuth callback
    if (code) {
      // Handle Slack OAuth callback
      // Redirect to connections page with success
      return NextResponse.redirect(new URL('/connections?success=slack', req.url));
    }
    
    return NextResponse.json({ message: "Slack callback processed" }, { status: 200 });
  } catch (error) {
    console.error("Slack callback error:", error);
    return NextResponse.redirect(new URL('/connections?error=slack', req.url));
  }
}
