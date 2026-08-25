import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin } from "lucide-react";
import { BUSINESS, LAWN_SERVICES, PRESSURE_SERVICES, SERVICE_AREAS, SITE_URL } from "@/lib/site";
import { CallButton, QuoteButton } from "@/components/site/QuoteButtons";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reviews } from "@/components/site/Reviews";
import { GalleryCarousel } from "@/components/site/GalleryCarousel";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroImage from "@/assets/gallery/lawn-care/front-lawn-mowing.jpg";

const TITLE = "Lawn Care & Landscaping in Savannah, GA | Dinosaurs Landscaping";
const DESCRIPTION =
  "Dinosaurs Landscaping provides mowing, hedge trimming, sod installation and pressure washing in Savannah, GA and surrounding areas. Free quotes — call (912) 677-7492.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Home,
});

function Home() {
  const featured = [
    ...LAWN_SERVICES.filter((s) =>
      ["mowing", "hedge-trimming", "fertilization", "sod-installation", "flower-bed-cleanup", "gutter-cleaning"].includes(
        s.slug,
      ),
    ),
    PRESSURE_SERVICES[0]!,
    PRESSURE_SERVICES[1]!,
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Freshly cut lawn"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/35" />
        <div className="container-page py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl text-forest-foreground">
            <p className="inline-flex items-center gap-2 rounded-full bg-forest-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase backdrop-blur">
              <MapPin className="size-3.5" aria-hidden="true" /> Savannah, GA & surrounding areas
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Lawn care and landscaping done right in Savannah
            </h1>
            <p className="mt-5 max-w-xl text-lg text-forest-foreground/85">
              Mowing, trimming, clean-ups, sod, and pressure washing from a local crew that shows
              up on time and leaves your property spotless.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteButton className="w-full bg-primary text-primary-foreground hover:bg-primary/85 sm:w-auto" />
              <CallButton
                className="w-full border-forest-foreground/30 bg-transparent text-forest-foreground hover:bg-forest-foreground/10 sm:w-auto"
                label={`Call Now · ${BUSINESS.phoneDisplay}`}
              />
            </div>
            <p className="mt-4 text-sm text-forest-foreground/70">
              Licensed · Free quotes · {BUSINESS.hours}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-page py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-forest uppercase">
              Locally owned &amp; operated
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Your neighbors in Savannah, not a national franchise
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Dinosaurs Landscaping is a small, hardworking crew based right here in Savannah,
              Georgia. We handle everything from weekly mowing to full seasonal clean-ups and
              exterior pressure washing — and we treat every property like it's on our own street.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Licensed, with free on-site quotes",
                "Consistent weekly, bi-weekly and monthly scheduling",
                "Clean edges, blown-off hardscapes, debris hauled away",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/about"
                className="text-sm font-semibold text-forest underline-offset-4 hover:underline"
              >
                More about our story →
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={heroImage}
              alt="Freshly cut lawn"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/60 py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-forest uppercase">Services</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Lawn maintenance &amp; pressure washing
            </h2>
            <p className="mt-4 text-muted-foreground">
              Full-service lawn care for homes and businesses across Savannah and the surrounding
              coastal communities.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-forest-foreground transition-all hover:-translate-y-0.5 hover:bg-forest/90"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="container-page py-20">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold tracking-wide text-forest uppercase">
                Service area
              </p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Proudly serving Savannah, GA and nearby
              </h2>
              <p className="mt-4 text-muted-foreground">
                Based in Savannah, we cover the islands, Pooler, Port Wentworth and more. Not sure
                if you're in range? Give us a call.
              </p>
              <Link
                to="/service-areas"
                className="mt-6 inline-block text-sm font-semibold text-forest underline-offset-4 hover:underline"
              >
                See all service areas →
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-3 self-center sm:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area.name}
                  className="rounded-xl bg-primary/25 px-4 py-3 text-sm font-medium text-forest"
                >
                  {area.name.replace(", GA", "")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Reviews />

      {/* Gallery carousel */}
      <section className="container-page py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-forest uppercase">Our work</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Recent projects around Savannah</h2>
          </div>
          <Link
            to="/gallery"
            className="text-sm font-semibold text-forest underline-offset-4 hover:underline"
          >
            View full gallery →
          </Link>
        </div>
        <GalleryCarousel />
      </section>

      <CtaBanner />
    </>
  );
}
