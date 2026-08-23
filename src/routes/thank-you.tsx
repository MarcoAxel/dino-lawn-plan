import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone } from "lucide-react";
import { BUSINESS, SITE_URL } from "@/lib/site";

const TITLE = "Thank You | Dinosaurs Landscaping Savannah, GA";
const DESCRIPTION =
  "Thanks for contacting Dinosaurs Landscaping. We received your quote request and will get back to you shortly.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/thank-you` }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section className="container-page flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary/40 text-forest">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-4xl font-bold">Thanks — we got your request</h1>
        <p className="mt-4 text-muted-foreground">
          A member of the Dinosaurs Landscaping crew will reach out shortly, usually the same day
          during business hours ({BUSINESS.hours}).
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-forest-foreground transition-all hover:-translate-y-0.5"
          >
            <Phone className="size-4" aria-hidden="true" /> Call {BUSINESS.phoneDisplay}
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-forest transition-all hover:-translate-y-0.5"
          >
            Back to home
          </Link>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          In the meantime, browse our{" "}
          <Link to="/services" className="font-semibold text-forest underline-offset-4 hover:underline">
            services
          </Link>{" "}
          or see recent work in the{" "}
          <Link to="/gallery" className="font-semibold text-forest underline-offset-4 hover:underline">
            gallery
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
