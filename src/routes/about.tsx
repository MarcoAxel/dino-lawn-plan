import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SITE_URL, WHY_US } from "@/lib/site";
import { CtaBanner } from "@/components/site/CtaBanner";
import crewImage from "@/assets/gallery/lawn-care/paver-walkway-install.jpg";
import lawnImage from "@/assets/gallery/lawn-care/manicured-front-yard.jpg";

const TITLE = "About Dinosaurs Landscaping | Savannah, GA Lawn Care";
const DESCRIPTION =
  "Locally owned and operated lawn care and landscaping in Savannah, GA. Licensed, insured, reliable scheduling and satisfaction guaranteed on every visit.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/50">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            A local crew that takes your yard personally
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Dinosaurs Landscaping is locally owned and operated right here in Savannah, Georgia.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Our story</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                We started with a single mower, a trailer, and a simple promise: show up when we
                say we will and leave every property better than we found it. That promise still
                runs the business today.
              </p>
              <p>
                Over the years we've grown into a full-service lawn care and landscaping crew
                serving Savannah and the surrounding islands — mowing, trimming, fertilization,
                sod, flower beds, seasonal clean-ups and exterior pressure washing.
              </p>
              <p>
                We're detail-oriented by habit. Clean edges, blown-off driveways, gates closed,
                debris hauled off. The small things are the whole job.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-6 inline-block text-sm font-semibold text-forest underline-offset-4 hover:underline"
            >
              See everything we do →
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={lawnImage}
              alt="Freshly cut lawn"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-16">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Why choose us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <CheckCircle2 className="size-6 text-forest" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-3xl font-bold">Meet the crew</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The same familiar faces on your property every visit — uniformed, courteous, and happy to
          answer questions while they work.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={crewImage}
              alt="Freshly cut lawn"
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-primary/25 p-8">
            <p className="text-lg font-medium text-forest">
              "We live and work in these neighborhoods. Every yard we finish is a sign in someone's
              front lawn."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— The Dinosaurs Landscaping crew</p>
          </div>
        </div>
      </section>

      <CtaBanner title="Let's take care of your yard" />
    </>
  );
}
