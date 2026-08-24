import { BUSINESS, SERVICE_AREAS, SITE_URL } from "./site";

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: "+1-912-677-7492",
  email: BUSINESS.email,
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Locally owned lawn care, landscaping and pressure washing serving Savannah, GA and surrounding areas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Savannah",
    addressRegion: "GA",
    addressCountry: "US",
  },
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: area.name.replace(", GA", ""),
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "23:00",
    },
  ],
  sameAs: [BUSINESS.facebookUrl, BUSINESS.instagramUrl, BUSINESS.reviewsUrl],
};
