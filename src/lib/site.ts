export const SITE_URL = "https://dinosaurslandscaping.com";

export const BUSINESS = {
  name: "Dinosaurs Landscaping",
  city: "Savannah",
  state: "GA",
  addressLine: "Savannah, Georgia",
  phoneDisplay: "(912) 677-7492",
  phoneHref: "tel:+19126777492",
  email: "dinosaurslandscaping@gmail.com",
  emailHref: "mailto:dinosaurslandscaping@gmail.com",
  hours: "Monday – Saturday, 7:00 AM – 11:00 PM",
  facebookUrl: "https://facebook.com/",
  instagramUrl: "https://instagram.com/",
  reviewsUrl: "https://maps.app.goo.gl/ERJdyaEstwK3RkRH7",
} as const;

export const ENV = {
  ga4Id: import.meta.env["VITE_GA4_ID"] ?? "",
  formspreeUrl: import.meta.env["VITE_FORMSPREE_URL"] ?? "https://formspree.io/f/xjybkknv",
} as const;

export const SERVICE_AREAS = [
  { name: "Savannah, GA", blurb: "Our home base — historic district, midtown, southside and everywhere between." },
  { name: "Pooler, GA", blurb: "Weekly mowing and full lawn programs for Pooler's growing neighborhoods." },
  { name: "Isle of Hope, GA", blurb: "Careful, detail-first maintenance for shaded, moss-draped coastal yards." },
  { name: "Wilmington Island, GA", blurb: "Salt-air-tough lawn care, hedge shaping and pressure washing." },
  { name: "Whitemarsh Island, GA", blurb: "Reliable scheduling for island properties and marsh-front lots." },
  { name: "Skidaway Island, GA", blurb: "Polished, HOA-friendly lawn and shrub programs." },
  { name: "Tybee Island, GA", blurb: "Beach-house yard clean-ups, trimming and exterior washing." },
  { name: "Port Wentworth, GA", blurb: "Mowing, clean-ups and driveway washing for homes and small businesses." },
  { name: "Georgetown, GA", blurb: "Consistent weekly and bi-weekly lawn maintenance." },
  { name: "Montgomery, GA", blurb: "Full-property maintenance for larger lots and acreage." },
  { name: "Garden City, GA", blurb: "Dependable lawn service for residential and commercial properties." },
] as const;

export type ServiceItem = {
  slug: string;
  name: string;
  icon: string;
  description: string;
};

export const LAWN_SERVICES: ServiceItem[] = [
  { slug: "mowing", name: "Mowing", icon: "Scissors", description: "Clean, striped cuts on a schedule you can set your watch by — weekly or bi-weekly." },
  { slug: "weed-eating", name: "Weed Eating", icon: "Wind", description: "Crisp edges along fences, beds, walkways and anywhere the mower can't reach." },
  { slug: "hedge-trimming", name: "Hedge Trimming", icon: "Trees", description: "Shaped, even hedges that frame your home instead of hiding it." },
  { slug: "planting", name: "Planting", icon: "Sprout", description: "Shrubs, perennials and seasonal color chosen to thrive in coastal Georgia." },
  { slug: "fertilization", name: "Fertilization", icon: "FlaskConical", description: "Season-timed feeding that builds thicker, deeper-green turf." },
  { slug: "weed-control", name: "Weed Control", icon: "ShieldCheck", description: "Pre- and post-emergent treatments that keep weeds out of your turf." },
  { slug: "herbicide-application", name: "Herbicide Application", icon: "SprayCan", description: "Targeted, licensed application for stubborn problem areas." },
  { slug: "shrub-care", name: "Shrub Trimming & Care", icon: "Leaf", description: "Pruning, shaping and health checks that keep shrubs full year-round." },
  { slug: "sod-installation", name: "Sod Installation", icon: "LayoutGrid", description: "Fresh sod, properly prepped and laid, for an instant new lawn." },
  { slug: "aeration", name: "Aeration", icon: "CircleDot", description: "Relieves compaction so water, air and nutrients reach the roots." },
  { slug: "seasonal-cleanup", name: "Spring & Fall Clean Up", icon: "Wind", description: "Leaves, limbs and winter debris hauled off so the yard resets clean." },
  { slug: "lawn-shrub-program", name: "Lawn & Shrub Program", icon: "CalendarCheck", description: "A year-round plan combining feeding, weed control and shrub care." },
  { slug: "flower-bed-cleanup", name: "Flower Bed Clean-Up", icon: "Flower2", description: "Weed removal plus fresh pine straw or mulch installation." },
  { slug: "roof-leaf-blowing", name: "Roof Leaf Blowing", icon: "Home", description: "Leaves and debris cleared off roof valleys before they hold moisture." },
  { slug: "gutter-cleaning", name: "Gutter Cleaning", icon: "Droplets", description: "Clogged gutters flushed and cleared so water drains away from the house." },
];

export const PRESSURE_SERVICES: ServiceItem[] = [
  { slug: "siding-washing", name: "Siding", icon: "Home", description: "Soft washing that lifts mildew and green film without damaging siding." },
  { slug: "driveway-washing", name: "Driveways", icon: "Car", description: "Surface-cleaned concrete that comes back several shades brighter." },
  { slug: "fence-washing", name: "Fences", icon: "Fence", description: "Wood and vinyl fencing washed clean of algae and weathering." },
  { slug: "porch-washing", name: "Porches", icon: "DoorOpen", description: "Porches and steps washed down to safe, non-slip clean." },
  { slug: "patio-washing", name: "Patios", icon: "Grid2x2", description: "Pavers, brick and concrete patios ready for company again." },
];

export const ALL_SERVICES = [...LAWN_SERVICES, ...PRESSURE_SERVICES];

export const REVIEWS = [
  {
    name: "Marcus Whitfield",
    initial: "M",
    timeAgo: "2 weeks ago",
    text: "Crew showed up exactly when they said they would and the yard has never looked better. Edges are perfect and they cleaned every bit of clippings off the driveway.",
  },
  {
    name: "Angela Reyes",
    initial: "A",
    timeAgo: "a month ago",
    text: "Had them pressure wash the siding and driveway before a family event. Night and day difference. Fair price and very easy to communicate with.",
  },
  {
    name: "Tom Baldwin",
    initial: "T",
    timeAgo: "2 months ago",
    text: "They installed sod in our backyard on Isle of Hope and it took beautifully. They walked us through the watering schedule and checked back a week later.",
  },
  {
    name: "Priya Raman",
    initial: "P",
    timeAgo: "3 months ago",
    text: "Been on their weekly lawn program for a season now. Reliable, polite, and the flower beds with fresh pine straw look fantastic.",
  },
] as const;

export const WHY_US = [
  { title: "Licensed & insured", text: "Fully covered, so you can feel comfortable having our crew on your property." },
  { title: "Free, no-pressure quotes", text: "We walk the property, listen, and give you a clear price with no upsell games." },
  { title: "Reliable scheduling", text: "We show up on the day we say we will — and we tell you if weather moves us." },
  { title: "Detail-oriented finish", text: "Clean edges, blown-off hardscapes, and debris hauled away every visit." },
  { title: "Locally owned & operated", text: "We live here. Your yard is our reputation in the neighborhood." },
  { title: "Satisfaction guaranteed", text: "If something isn't right, tell us and we'll come back out and make it right." },
];
