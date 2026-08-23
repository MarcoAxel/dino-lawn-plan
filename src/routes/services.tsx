import { createFileRoute } from "@tanstack/react-router";
import { LAWN_SERVICES, PRESSURE_SERVICES, SITE_URL } from "@/lib/site";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Lawn Care & Pressure Washing Services | Savannah, GA";
const DESCRIPTION =
  "Mowing, hedge trimming, fertilization, sod installation, gutter cleaning and pressure washing for siding, driveways, fences, porches and patios in Savannah, GA.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/50">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Lawn care &amp; pressure washing services in Savannah, GA
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Everything your property needs, handled by one local crew — from weekly mowing to a
            full exterior wash before the holidays.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-3xl font-bold">Lawn Maintenance</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Recurring and one-time services that keep your turf, beds and shrubs healthy through
          coastal Georgia's long growing season.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LAWN_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-16">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Pressure Washing</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Safe, effective washing that strips away mildew, algae and years of Savannah humidity.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRESSURE_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tell us what your property needs"
        subtitle="Send a few details and we'll get you a free, no-pressure quote — usually the same day."
      />
    </>
  );
}
