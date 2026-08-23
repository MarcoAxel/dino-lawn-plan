import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceItem } from "@/lib/site";

export function ServiceCard({ service }: { service: ServiceItem }) {
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  const Icon = iconMap[service.icon] ?? Icons.Leaf;

  return (
    <article
      id={service.slug}
      className="group scroll-mt-28 rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
    >
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/40 text-forest transition-colors group-hover:bg-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
    </article>
  );
}
