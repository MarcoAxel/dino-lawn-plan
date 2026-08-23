import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { GALLERY_IMAGES, LAWN_IMAGES, PRESSURE_IMAGES } from "@/lib/gallery";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Project Gallery | Lawn Care & Pressure Washing Savannah, GA";
const DESCRIPTION =
  "Before and after photos of lawn care, sod, landscaping and pressure washing projects completed around Savannah, GA by Dinosaurs Landscaping.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "lawn-care", label: "Lawn Care" },
  { key: "pressure-washing", label: "Pressure Washing" },
] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");

  const images =
    filter === "all" ? GALLERY_IMAGES : filter === "lawn-care" ? LAWN_IMAGES : PRESSURE_IMAGES;

  return (
    <>
      <section className="border-b border-border bg-muted/50">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Completed lawn care projects in Savannah, GA
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Real yards, real results. A look at recent work across Savannah and the surrounding
            islands.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === f.key
                  ? "bg-forest text-forest-foreground"
                  : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-forest"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {images.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
            New photos for this category are coming soon.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl border border-border bg-muted"
              >
                <img
                  src={image.src}
                  alt="Freshly cut lawn"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <CtaBanner title="Want results like these?" />
    </>
  );
}
