import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { QuoteButton } from "./QuoteButtons";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-2.5 min-w-0" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="Freshly cut lawn" className="h-11 w-auto shrink-0" />
          <span className="truncate text-lg font-bold tracking-tight uppercase text-forest sm:text-xl">
            DINOSAURS LANDSCAPING
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-forest bg-muted" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-forest/75"
          >
            <Phone className="size-4" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <QuoteButton className="px-5 py-2.5" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="inline-flex size-11 items-center justify-center rounded-full bg-forest text-forest-foreground"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="hidden size-11 items-center justify-center rounded-full border border-border text-foreground md:inline-flex lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-forest bg-muted" }}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <QuoteButton className="mt-2 w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}
