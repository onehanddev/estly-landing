"use client";

import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const initializedRef = useRef(false);
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost =
    process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

  useEffect(() => {
    if (initializedRef.current) return;
    if (!posthogKey) return;

    posthog.init(posthogKey, {
      api_host: posthogHost,
      person_profiles: "identified_only",
      capture_pageview: true,
      capture_pageleave: true,
    });

    initializedRef.current = true;
  }, [posthogHost, posthogKey]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
