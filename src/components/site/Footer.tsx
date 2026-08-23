import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import { BUSINESS, LAWN_SERVICES, PRESSURE_SERVICES, SERVICE_AREAS } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const services = [...LAWN_SERVICES.slice(0, 6), ...PRESSURE_SERVICES.slice(0, 2)];

  return (
    <footer className="mt-24 border-t border-border bg-forest text-forest-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/logo.png"
            alt="Freshly cut lawn"
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm text-forest-foreground/75">
            Locally owned lawn care and pressure washing serving Savannah, Georgia and the
            surrounding coastal communities.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={BUSINESS.facebookUrl}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full bg-forest-foreground/10 transition-colors hover:bg-forest-foreground/20"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={BUSINESS.instagramUrl}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full bg-forest-foreground/10 transition-colors hover:bg-forest-foreground/20"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-forest-foreground/80">
            <li><Link to="/" className="hover:text-forest-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-forest-foreground">Services</Link></li>
            <li><Link to="/service-areas" className="hover:text-forest-foreground">Service Areas</Link></li>
            <li><Link to="/gallery" className="hover:text-forest-foreground">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-forest-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-forest-foreground">Get a Free Quote</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-forest-foreground">Privacy Policy</Link></li>
            <li><Link to="/accessibility" className="hover:text-forest-foreground">Accessibility</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-forest-foreground/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:text-forest-foreground">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="font-medium hover:text-forest-foreground">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={BUSINESS.phoneHref} className="hover:text-forest-foreground">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={BUSINESS.emailHref} className="break-all hover:text-forest-foreground">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {BUSINESS.addressLine}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0" />
              {BUSINESS.hours}
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold tracking-wide uppercase">Service Areas</h3>
          <p className="mt-3 text-sm text-forest-foreground/70">
            {SERVICE_AREAS.map((a) => a.name.replace(", GA", "")).join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-forest-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-forest-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p>Serving Savannah, GA and surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}
