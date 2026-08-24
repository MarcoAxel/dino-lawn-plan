import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import grassImage from "@/assets/gallery/lawn-care/backyard-sod-install.jpg";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page Not Found | Dinosaurs Landscaping" },
      { name: "description", content: "That page couldn't be found. Head back home or call Dinosaurs Landscaping in Savannah, GA." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <section className="relative isolate flex min-h-[75vh] items-center overflow-hidden">
      <img
        src={grassImage}
        alt="Freshly cut lawn"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-forest/80" />
      <div className="container-page py-20 text-center text-forest-foreground">
        <img
          src="/logo.png"
          alt="Freshly cut lawn"
          className="mx-auto h-20 w-auto brightness-0 invert"
        />
        <p className="mt-8 text-6xl font-bold sm:text-7xl">404</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">This patch of grass doesn't exist</h1>
        <p className="mx-auto mt-4 max-w-lg text-forest-foreground/80">
          The page you were looking for has been moved or mowed down. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-foreground/30 px-6 py-3 text-sm font-semibold text-forest-foreground transition-all hover:-translate-y-0.5 hover:bg-forest-foreground/10"
          >
            <Phone className="size-4" aria-hidden="true" /> Call {BUSINESS.phoneDisplay}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-forest-foreground/80">
          <Link to="/services" className="underline-offset-4 hover:underline">Services</Link>
          <Link to="/service-areas" className="underline-offset-4 hover:underline">Service Areas</Link>
          <Link to="/gallery" className="underline-offset-4 hover:underline">Gallery</Link>
          <Link to="/contact" className="underline-offset-4 hover:underline">Get a Free Quote</Link>
        </div>
      </div>
    </section>
  );
}
