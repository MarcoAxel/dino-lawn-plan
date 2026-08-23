import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ALL_SERVICES, BUSINESS, ENV, SITE_URL } from "@/lib/site";

const TITLE = "Get a Free Quote | Dinosaurs Landscaping Savannah, GA";
const DESCRIPTION =
  "Request a free lawn care or pressure washing quote in Savannah, GA. Call (912) 677-7492 or send us a message and we'll get right back to you.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(ENV.formspreeUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      form.reset();
      navigate({ to: "/thank-you" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-ring/40";

  return (
    <>
      <section className="border-b border-border bg-muted/50">
        <div className="container-page py-16 sm:py-20">
          <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Get a free lawn care quote in Savannah, GA
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us about your property and we'll follow up with a straightforward price. Prefer to
            talk? Call us — we answer.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-forest-foreground transition-all hover:-translate-y-0.5"
          >
            <Phone className="size-4" aria-hidden="true" /> Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">Request a quote</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" name="name" required autoComplete="name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="address" className="text-sm font-medium">Property address</label>
                <input id="address" name="address" autoComplete="street-address" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium">Service needed</label>
                <select id="service" name="service" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>Select a service</option>
                  {ALL_SERVICES.map((service) => (
                    <option key={service.slug} value={service.name}>{service.name}</option>
                  ))}
                  <option value="Other / Not sure">Other / Not sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={5} className={fieldClass} />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-destructive">
                  Something went wrong sending your message. Please call us at {BUSINESS.phoneDisplay}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-forest-foreground transition-all hover:-translate-y-0.5 hover:bg-forest/90 disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Get a Free Quote"}
              </button>
            </form>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">Contact details</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 text-forest" />
                  <a href={BUSINESS.phoneHref} className="font-medium hover:text-forest">
                    {BUSINESS.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 text-forest" />
                  <a href={BUSINESS.emailHref} className="break-all font-medium hover:text-forest">
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 text-forest" />
                  {BUSINESS.addressLine}
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="mt-0.5 size-4 text-forest" />
                  {BUSINESS.hours}
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href={BUSINESS.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex size-10 items-center justify-center rounded-full bg-muted text-forest hover:bg-primary/40">
                  <Facebook className="size-4" />
                </a>
                <a href={BUSINESS.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex size-10 items-center justify-center rounded-full bg-muted text-forest hover:bg-primary/40">
                  <Instagram className="size-4" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map of Savannah, Georgia"
                src="https://www.google.com/maps?q=Savannah,+Georgia&z=11&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
