"use client";

import { useEffect } from "react";
import { UTM_SESSION_KEY } from "@/hooks/useUTMTracking";

const TRACK_KEY = "_portfolio_tracked";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Only fire once per browser session
    if (sessionStorage.getItem(TRACK_KEY)) return;
    sessionStorage.setItem(TRACK_KEY, "1");

    // Parse UTM params from URL and persist them for other components
    const searchParams = new URLSearchParams(window.location.search);
    const utmParams: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) utmParams[key] = value;
    }
    if (Object.keys(utmParams).length > 0) {
      sessionStorage.setItem(UTM_SESSION_KEY, JSON.stringify(utmParams));
    }

    const payload = {
      page: window.location.pathname,
      referrer: document.referrer,
      utmParams,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      timestamp: new Date().toISOString(),
    };

    // sendBeacon is preferred — fires even if the page unloads immediately
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/analytics/track",
        new Blob([JSON.stringify(payload)], { type: "application/json" })
      );
    } else {
      fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  }, []);

  return <>{children}</>;
}
