import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getConsent, loadAnalytics, setConsent } from "@/lib/analytics";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === "granted") loadAnalytics();
    if (consent === null) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie and analytics notice"
      className="fixed inset-x-3 bottom-3 z-[60] rounded-2xl border border-border bg-background/98 p-5 shadow-xl backdrop-blur sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md"
    >
      <h2 className="text-sm font-semibold">Cookies &amp; analytics</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        We use Google Analytics cookies to see how visitors use this site so we can improve it. No
        analytics cookies are set unless you accept. Read our{" "}
        <Link to="/privacy-policy" className="font-medium text-forest underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => {
            setConsent("granted");
            setVisible(false);
          }}
          className="flex-1 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => {
            setConsent("denied");
            setVisible(false);
          }}
          className="flex-1 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
