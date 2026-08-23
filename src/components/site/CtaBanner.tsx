import { BUSINESS } from "@/lib/site";
import { CallButton, QuoteButton } from "./QuoteButtons";

export function CtaBanner({
  title = "Ready for a yard you're proud of?",
  subtitle = `Free quotes across Savannah, GA and surrounding areas. Call ${BUSINESS.phoneDisplay} or request a quote online.`,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-page my-20">
      <div className="rounded-3xl bg-forest px-6 py-14 text-center text-forest-foreground sm:px-12">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-forest-foreground/80">{subtitle}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <QuoteButton className="bg-primary text-primary-foreground hover:bg-primary/85" />
          <CallButton className="border-forest-foreground/25 bg-transparent text-forest-foreground hover:bg-forest-foreground/10" />
        </div>
      </div>
    </section>
  );
}
