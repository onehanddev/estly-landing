import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_WAITLIST_TABLE = "waitlist_signups";
const FALLBACK_WAITLIST_TABLE = "waitlist";

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
  const supabaseKey =
    process.env.WAITLIST_SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.WAITLIST_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const waitlistTable = (process.env.WAITLIST_TABLE || DEFAULT_WAITLIST_TABLE).trim();

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured. Set WAITLIST_SUPABASE_URL and a Supabase key.",
      },
      { status: 500 }
    );
  }

  const normalizedUrl = supabaseUrl.replace(/\/$/, "");
  const candidateTables =
    waitlistTable === DEFAULT_WAITLIST_TABLE
      ? [waitlistTable, FALLBACK_WAITLIST_TABLE]
      : [waitlistTable];

  // Keep payload minimal to avoid failures if optional columns don't exist.
  const payload = [{ email }];
  let lastErrorBody = "";
  let lastStatus = 502;

  for (const tableName of candidateTables) {
    const insertUrl = `${normalizedUrl}/rest/v1/${tableName}?on_conflict=email`;
    const response = await fetch(insertUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, table: tableName });
    }

    lastStatus = response.status || 502;
    lastErrorBody = await response.text();
  }

  return NextResponse.json(
    {
      error: "Failed to save waitlist signup",
      details: lastErrorBody || "Unknown upstream error",
    },
    { status: lastStatus >= 400 ? lastStatus : 502 }
  );
}
