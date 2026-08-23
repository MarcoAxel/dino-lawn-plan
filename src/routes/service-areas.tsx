import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS, SITE_URL } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Service Areas | Lawn Care in Savannah, GA & Nearby";
const DESCRIPTION =
  "Dinosaurs Landscaping serves Savannah, Pooler, Isle of Hope, Wilmington Island, Whitemarsh Island, Skidaway Island, Tybee Island, Port Wentworth, Georgetown and Garden City, GA.";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/service-areas` }],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/50">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Lawn care service areas around Savannah, Georgia
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Savannah is home base. From there we cover the islands, the westside and everywhere in
            between with the same reliable schedule.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Where we work</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="flex items-center gap-2 text-base font-semibold text-forest">
                    <MapPin className="size-4" aria-hidden="true" />
                    {area.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{area.blurb}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Don't see your neighborhood?{" "}
              <Link to="/contact" className="font-semibold text-forest underline-offset-4 hover:underline">
                Reach out
              </Link>{" "}
              — we often travel a bit further for regular customers. See what we offer on our{" "}
              <Link to="/services" className="font-semibold text-forest underline-offset-4 hover:underline">
                services page
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Coverage map</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map of Dinosaurs Landscaping service area around Savannah, Georgia"
                src="https://www.google.com/maps?q=Savannah,+Georgia&z=10&output=embed"
                width="100%"
                height="520"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Serving your street? Let's find out." />
    </>
  );
}
