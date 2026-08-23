import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function QuoteButton({
  className,
  label = "Get a Free Quote",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link
      to="/contact"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-forest-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
    >
      {label}
    </Link>
  );
}

export function CallButton({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={BUSINESS.phoneHref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-forest/25 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
    >
      <Phone className="size-4" aria-hidden="true" />
      {label ?? `Call ${BUSINESS.phoneDisplay}`}
    </a>
  );
}
