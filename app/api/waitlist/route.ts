import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_WAITLIST_TABLE = "waitlist_signups";

export async function POST(request: NextRequest) {
  let body: { email?: string } = {};

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase() || "";
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const supabaseUrl =
    process.env.WAITLIST_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey =
    process.env.WAITLIST_SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;
  const waitlistTable = process.env.WAITLIST_TABLE || DEFAULT_WAITLIST_TABLE;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured. Set WAITLIST_SUPABASE_URL and WAITLIST_SUPABASE_SERVICE_ROLE_KEY.",
      },
      { status: 500 }
    );
  }

  const normalizedUrl = supabaseUrl.replace(/\/$/, "");
  const insertUrl = `${normalizedUrl}/rest/v1/${waitlistTable}?on_conflict=email`;

  const payload = [
    {
      email,
      source: "landing_page",
      created_at: new Date().toISOString(),
    },
  ];

  const response = await fetch(insertUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      {
        error: "Failed to save waitlist signup",
        details: errorText || "Unknown upstream error",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
