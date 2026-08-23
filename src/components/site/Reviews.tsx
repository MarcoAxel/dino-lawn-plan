import { Star } from "lucide-react";
import { BUSINESS, REVIEWS } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-star text-star" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-muted/60 py-20">
      <div className="container-page">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-forest uppercase">Reviews</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">What Savannah neighbors say</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars />
            <span className="text-sm font-medium text-muted-foreground">5.0 on Google</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/50 font-semibold text-forest">
                  {review.initial}
                </span>
                <div>
                  <figcaption className="text-sm font-semibold">{review.name}</figcaption>
                  <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
                </div>
              </div>
              <div className="mt-4">
                <Stars />
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                “{review.text}”
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BUSINESS.reviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-forest transition-all hover:-translate-y-0.5 hover:shadow-sm"
          >
            See more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
