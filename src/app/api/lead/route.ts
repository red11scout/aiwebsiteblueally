import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { intent, companyName, revenueRange, industry, email, phone } = body;

    // Basic validation
    if (!email || !intent) {
      return NextResponse.json(
        { error: "Email and intent are required." },
        { status: 400 }
      );
    }

    // Forward to webhook if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent,
          companyName,
          revenueRange,
          industry,
          email,
          phone,
          source: "gofasterwithai",
          timestamp: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
