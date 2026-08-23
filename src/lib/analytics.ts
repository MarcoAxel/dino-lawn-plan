import { ENV } from "./site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "dl-analytics-consent";
let loaded = false;

export function getConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setConsent(value: "granted" | "denied") {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, value);
  if (value === "granted") loadAnalytics();
}

export function loadAnalytics() {
  if (typeof window === "undefined" || loaded) return;
  const id = ENV.ga4Id;
  if (!id) return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

export function trackPageView(path: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}
