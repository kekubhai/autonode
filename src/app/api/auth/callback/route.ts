import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Generic auth callback - just return success
    // Specific OAuth callbacks are handled in subdirectories
    return NextResponse.json({ 
      message: "Auth callback received", 
      timestamp: new Date().toISOString() 
    }, { status: 200 });
  } catch (error) {
    console.error("Auth callback error:", error);
    return NextResponse.json({ error: "Callback processing failed" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  return GET(req); // Handle POST requests the same way
}
