import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// Force dynamic rendering for OAuth callbacks
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');
    
    // This is a Notion OAuth callback
    if (code) {
      // Handle Notion OAuth callback
      // Redirect to connections page with success
      return NextResponse.redirect(new URL('/connections?success=notion', req.url));
    }
    
    return NextResponse.json({ message: "Notion callback processed" }, { status: 200 });
  } catch (error) {
    console.error("Notion callback error:", error);
    return NextResponse.redirect(new URL('/connections?error=notion', req.url));
  }
}
