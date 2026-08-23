import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS, SITE_URL } from "@/lib/site";

const TITLE = "Privacy Policy | Dinosaurs Landscaping";
const DESCRIPTION =
  "How Dinosaurs Landscaping collects, uses and protects information submitted through our Savannah, GA lawn care website, including Google Analytics and cookies.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy-policy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Who we are</h2>
            <p className="mt-3">
              {BUSINESS.name} ("we", "us") is a lawn care and landscaping business located in{" "}
              {BUSINESS.addressLine}. This policy explains what information this website collects
              and how it is used. Questions? Email{" "}
              <a href={BUSINESS.emailHref} className="font-medium text-forest underline-offset-4 hover:underline">
                {BUSINESS.email}
              </a>{" "}
              or call{" "}
              <a href={BUSINESS.phoneHref} className="font-medium text-forest underline-offset-4 hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Information you give us</h2>
            <p className="mt-3">
              When you submit our quote form we collect your name, phone number, email address,
              property address, the service you're interested in, and any message you write. We use
              this only to respond to your request, provide the services you ask for, and keep in
              touch about your account. We do not sell your information.
            </p>
            <p className="mt-3">
              Form submissions are delivered to us by email through Formspree, a third-party form
              processing service, which handles the message in transit under its own privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Analytics &amp; cookies</h2>
            <p className="mt-3">
              This website uses <strong className="text-foreground">Google Analytics 4</strong>, a
              web analytics service provided by Google LLC, to understand how visitors find and use
              the site. Google Analytics sets cookies and similar identifiers in your browser and
              collects information such as pages viewed, time on page, approximate geographic
              location (derived from a truncated IP address), referring website, and device and
              browser type.
            </p>
            <p className="mt-3">
              We have enabled IP anonymization. We do not use Google Analytics to identify you
              personally, and we do not combine analytics data with the contact details you submit
              through the form. Google may process this data on servers in the United States; see{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-forest underline-offset-4 hover:underline"
              >
                Google's Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-forest underline-offset-4 hover:underline"
              >
                how Google uses data from sites that use its services
              </a>
              .
            </p>
            <p className="mt-3">
              <strong className="text-foreground">Your choices:</strong> analytics only loads after
              you accept it in the cookie banner shown on your first visit. You can decline, and you
              can change your mind at any time by clearing this site's data in your browser. You may
              also install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-forest underline-offset-4 hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>{" "}
              or enable "Do Not Track" / tracking protection in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Embedded maps</h2>
            <p className="mt-3">
              Pages that show a map embed content from Google Maps. Loading that map may allow
              Google to collect standard technical data such as your IP address, in line with
              Google's own privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Data retention &amp; security</h2>
            <p className="mt-3">
              We keep quote requests only as long as needed to serve you and maintain business
              records. We use reasonable safeguards to protect your information, though no method of
              transmission over the internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
            <p className="mt-3">
              You may ask us to access, correct or delete the personal information you've submitted
              to us. Contact us at{" "}
              <a href={BUSINESS.emailHref} className="font-medium text-forest underline-offset-4 hover:underline">
                {BUSINESS.email}
              </a>{" "}
              and we'll respond promptly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Children's privacy</h2>
            <p className="mt-3">
              This site is intended for adults arranging property services and is not directed to
              children under 13. We do not knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground">Changes to this policy</h2>
            <p className="mt-3">
              We may update this policy from time to time. The revision date at the top reflects the
              most recent change. See also our{" "}
              <Link to="/accessibility" className="font-medium text-forest underline-offset-4 hover:underline">
                accessibility statement
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
