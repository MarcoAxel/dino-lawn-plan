import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, SITE_URL } from "@/lib/site";

const TITLE = "Accessibility Statement | Dinosaurs Landscaping";
const DESCRIPTION =
  "Dinosaurs Landscaping is committed to keeping our Savannah, GA lawn care website usable and accessible to everyone, including visitors with disabilities.";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/accessibility` }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Accessibility Statement</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Our commitment</h2>
            <p className="mt-3">
              {BUSINESS.name} is committed to making this website usable for everyone, including
              people with disabilities. We aim to meet the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA as a working standard.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">What we've done</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Semantic headings and landmarks so screen readers can navigate the page structure.</li>
              <li>Descriptive alternative text on images and accessible labels on buttons and icons.</li>
              <li>Keyboard-operable navigation, forms and carousel controls with visible focus styles.</li>
              <li>Color combinations chosen for readable contrast, and text that scales when zoomed.</li>
              <li>A responsive layout that works on phones, tablets and desktops.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Third-party content</h2>
            <p className="mt-3">
              Some parts of this site — such as the embedded Google Maps coverage map — are provided
              by third parties, and we do not control their accessibility. If a third-party element
              blocks you, contact us and we will give you the same information another way.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Need help or found a problem?</h2>
            <p className="mt-3">
              If any part of this site is difficult to use, or you need information in another
              format, please contact us — we'll help directly and work to fix the issue.
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                Phone:{" "}
                <a href={BUSINESS.phoneHref} className="font-medium text-forest underline-offset-4 hover:underline">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={BUSINESS.emailHref} className="font-medium text-forest underline-offset-4 hover:underline">
                  {BUSINESS.email}
                </a>
              </li>
              <li>Hours: {BUSINESS.hours}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Ongoing effort</h2>
            <p className="mt-3">
              Accessibility is an ongoing process. We review the site periodically and make
              improvements as we identify barriers or receive feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
