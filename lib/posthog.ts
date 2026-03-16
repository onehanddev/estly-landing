"use client";

import posthog from "posthog-js";

type EventProperties = Record<string, string | number | boolean | null>;

export function trackPosthogEvent(
  eventName: string,
  properties: EventProperties = {}
) {
  if (typeof window === "undefined") return;
  try {
    posthog.capture(eventName, properties);
  } catch {
    // best-effort analytics
  }
}
