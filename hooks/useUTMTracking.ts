"use client";

import { useEffect, useState } from "react";

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const UTM_KEYS: (keyof UTMParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

export const UTM_SESSION_KEY = "_portfolio_utm";

export function useUTMTracking(): UTMParams {
  const [utmParams, setUTMParams] = useState<UTMParams>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const fromUrl: UTMParams = {};

    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) fromUrl[key] = value;
    }

    // URL params take priority and override stored ones
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(UTM_SESSION_KEY, JSON.stringify(fromUrl));
      setUTMParams(fromUrl);
      return;
    }

    // Restore from sessionStorage if no URL params
    try {
      const stored = sessionStorage.getItem(UTM_SESSION_KEY);
      if (stored) setUTMParams(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
  }, []);

  return utmParams;
}

/** Read stored UTM params synchronously (use in event handlers / API calls). */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem(UTM_SESSION_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return {};
}
