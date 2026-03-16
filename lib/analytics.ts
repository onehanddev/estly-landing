"use client";

type AnalyticsProperties = Record<string, string | number | boolean | null>;

export async function trackEvent(
  eventName: string,
  properties: AnalyticsProperties = {}
) {
  if (typeof window === "undefined") return;

  const payload = {
    eventName,
    properties,
    pagePath: window.location.pathname,
    pageUrl: window.location.href,
    referrer: document.referrer || null,
    timestamp: new Date().toISOString(),
  };

  const body = JSON.stringify(payload);

  if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
    const blob = new Blob([body], { type: "application/json" });
    const sent = navigator.sendBeacon("/api/analytics", blob);
    if (sent) return;
  }

  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    // best-effort analytics
  }
}
