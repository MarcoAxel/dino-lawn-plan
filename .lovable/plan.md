# Dinosaurs Landscaping — Website Plan

## 1. Project summary

A modern, responsive, static website for **Dinosaurs Landscaping**, a lawn care and landscaping company based in **Savannah, Georgia**, serving surrounding areas. The site is light-themed, mobile-first, and built for a small-business owner who wants customers to feel confident inviting the crew onto their property. All contact information, logo, and images are placeholders for the owner to swap in later.

## 2. Tech stack & hosting

- **Framework:** TanStack Start (React 19 + Vite 7) on the existing template.
- **Styling:** Tailwind CSS v4, custom semantic design tokens in `src/styles.css`.
- **Deployment:** Vercel free tier as a static/frontend build.
- **Contact form:** Formspree endpoint `https://formspree.io/f/xjybkknv` wired via a plain HTML form with `POST` and `name` attributes on inputs.
- **No backend:** No database, auth, or server functions required.
- **No dark mode:** Light-only theme (white + pastel green palette).
- **Images:** Stock-style placeholder URLs from Unsplash with descriptive `alt` text.

## 3. Design system

### Color palette

A white background with a pastel green as the core accent, supported by a deeper forest green and a warm earthy neutral for contrast and CTAs.

| Token | Role | Light value (oklch) |
|---|---|---|
| `--background` | Page/card backgrounds | `oklch(1 0 0)` white |
| `--foreground` | Primary text | `oklch(0.2 0.04 260)` near-black |
| `--primary` | Main accent / pastel green | `oklch(0.85 0.08 145)` |
| `--primary-foreground` | Text on primary accent | `oklch(0.25 0.04 145)` dark green |
| `--secondary` | Forest green for contrast CTAs | `oklch(0.35 0.06 145)` |
| `--secondary-foreground` | Text on secondary | `oklch(0.98 0.005 145)` off-white |
| `--accent` | Warm earthy neutral / sand | `oklch(0.82 0.04 85)` |
| `--accent-foreground` | Text on accent | `oklch(0.25 0.04 85)` |
| `--muted` | Subtle backgrounds | `oklch(0.96 0.01 145)` very light green-gray |
| `--muted-foreground` | Captions, secondary text | `oklch(0.55 0.03 260)` |
| `--border` | Dividers, input borders | `oklch(0.9 0.015 145)` |
| `--ring` | Focus states | `oklch(0.7 0.04 145)` |

### Typography (selected)

| Display / headings | Body | Why it fits |
|---|---|---|
| **Outfit** | **Figtree** | Geometric, highly readable, contemporary local-business feel. |

This pairing is bold, modern, and approachable. It will be loaded via `<link>` in `src/routes/__root.tsx` and registered in `src/styles.css` with `@theme`.

### Components & interactions

- **Sticky header:** Logo placeholder, navigation links, "Get a Free Quote" button, and a click-to-call phone number placeholder.
- **Mobile nav:** Hamburger menu that opens an overlay with nav links and CTAs.
- **Buttons:** Rounded, high-contrast CTAs; primary pastel green for quote actions, secondary forest green for alternate CTAs. Subtle `hover:scale-[1.02]` and `hover:shadow-md` transitions.
- **Cards:** Service cards, testimonial cards, and before/after cards with soft borders, consistent padding, and hover lift.
- **Smooth scroll:** Anchor links scroll smoothly to sections; navigation links route to page routes.
- **Form states:** Loading, success, and error states handled by Formspree's redirect/thank-you behavior plus client-side validation.

## 4. Pages & routes

```text
/                  Home
/services          Services
/service-areas     Service Areas
/about             About Us
/gallery           Gallery
/contact           Contact / Get a Quote
```

All pages share the same sticky header and footer. The `src/routes/__root.tsx` head will be updated with sitewide defaults; each page will set its own `head()` title, description, canonical, and OG tags.

### 4.1 Home (`/`)

Sections, in order:

1. **Hero**
   - Background image: manicured lawn / garden scene (Unsplash placeholder).
   - Headline: "Professional Lawn Care & Landscaping in Savannah, GA".
   - Subheadline: Locally rooted, reliable service for homeowners and businesses across Savannah and surrounding areas.
   - Two CTAs: "Get a Free Quote" (links to `/contact`) and "Call Now" (`tel:[PHONE NUMBER]`).
2. **Intro / About blurb**
   - Short paragraph about trust, local roots, and pride in the work.
   - Link to `/about`.
3. **Services overview grid**
   - 6–8 high-level service cards with Lucide icons and short descriptions.
   - Link to `/services`.
4. **Service area highlight**
   - "Serving Savannah, Isle of Hope, Dutch Island, Pooler, Garden City, Georgetown, and Wilmington Island."
   - Link to `/service-areas`.
5. **Testimonials**
   - 3 placeholder 5-star reviews with names and locations.
6. **Before / After gallery teaser**
   - 4–6 image grid with "Lawn Care" / "Pressure Washing" labels.
   - Link to `/gallery`.
7. **Final CTA banner**
   - "Ready for a greener, cleaner yard?" with phone number and "Get a Free Quote" button.

### 4.2 Services (`/services`)

Two categorized sections, each as a card grid:

**Lawn Maintenance**

- Mowing
- Weed eating
- Hedge trimming
- Planting
- Fertilization
- Weed control
- Herbicide application
- Shrub trimming / care
- Sod installation
- Aeration
- Spring & fall clean up
- Lawn & shrub program
- Flower bed clean-up (weed removal, pine straw, mulch installation)
- Roof leaf blowing / cleaning
- Gutter cleaning

**Pressure Washing**

- Siding
- Driveways
- Fences
- Porches
- Patios

Each card has a relevant Lucide icon, a 1–2 sentence description, and a subtle hover effect. Page ends with a CTA banner: phone number + "Get a Free Quote".

### 4.3 Service Areas (`/service-areas`)

- Hero section with a map-style placeholder image (Unsplash or SVG).
- Savannah, GA highlighted as home base.
- Cards or list for each surrounding area with a brief description:
  - Isle of Hope
  - Dutch Island
  - Pooler
  - Garden City
  - Georgetown
  - Wilmington Island
- CTA to `/contact`.

### 4.4 About Us (`/about`)

- Company story section (locally owned/operated, reliable, detail-oriented — placeholder copy).
- **Why choose us** list with icons:
  - Licensed & insured
  - Free quotes
  - Reliable scheduling
  - Satisfaction guaranteed
  - Locally rooted in Savannah
- Placeholder team/crew photo section.
- CTA banner.

### 4.5 Gallery (`/gallery`)

- Filter tabs: **All**, **Lawn Care**, **Pressure Washing**.
- Responsive image grid of before/after and completed project photos (Unsplash placeholders).
- Each image has descriptive alt text and a subtle hover zoom.
- CTA banner at the bottom.

### 4.6 Contact / Get a Quote (`/contact`)

- Page headline: "Get a Free Quote".
- Contact form (Formspree, POST):
  - Name (input, `name="name"`, required)
  - Phone (input, `name="phone"`, required)
  - Email (input, `name="email"`, required)
  - Address (input, `name="address"`)
  - Service Needed (select dropdown, `name="service"`, all services listed)
  - Message (textarea, `name="message"`)
  - Submit button: "Send Message"
- Contact info cards:
  - Phone placeholder with `tel:` link.
  - Email placeholder with `mailto:` link.
  - Business hours placeholder.
  - Embedded map placeholder for Savannah, GA.
  - Social media icon placeholders (Facebook, Instagram, etc.) with `href="#"` for later.

## 5. Global footer

Every page includes a footer with:

- Logo placeholder.
- Quick links to all pages.
- List of services (grouped or condensed).
- List of service areas.
- Contact info placeholders (phone, email, hours).
- Social media icons.
- Copyright line: "© [YEAR] Dinosaurs Landscaping. All rights reserved."

## 6. Functionality notes

- **Click-to-call:** All phone number elements link to `tel:[PHONE NUMBER]`.
- **Get a Free Quote:** Repeated in header, hero, footer, and after Services sections. Always links to `/contact`.
- **Formspree form:** Wired to `https://formspree.io/f/xjybkknv` with `method="POST"` and `name` attributes on every input.
- **Smooth scroll:** `scroll-behavior: smooth` plus anchor handling for in-page links.
- **Hover animations:** Subtle transforms and shadows on cards/buttons; no heavy animations.
- **Mobile-first:** Navigation collapses into a hamburger menu; CTAs remain thumb-friendly.
- **Accessibility:** Semantic headings, alt text on images, focus-visible outlines, color contrast checked.

## 7. SEO & local structure

- Per-page `head()` with unique title, description, canonical, OG tags, and `og:type: website`.
- Keywords naturally included in headings: "Savannah, GA", "landscaping", "lawn care", "pressure washing", and each service area.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy.
- `robots.txt` and `sitemap.xml` prepared for static site (no placeholder URLs).
- Image alt text written for lawn/landscape context.

## 8. Placeholder summary

These will be clearly marked so the owner can swap them in later:

| Placeholder | Where it appears | Replacement method |
|---|---|---|
| `[LOGO]` | Header, footer | Replace image file or SVG component |
| `[PHONE NUMBER]` | Header, hero, footer, CTAs, contact page | Replace in a central `constants.ts` or directly in components |
| `[EMAIL]` | Footer, contact page | Replace in same constants file |
| `[BUSINESS HOURS]` | Contact page, footer | Replace text block |
| Social links | Footer, contact page | Replace `href="#"` with real URLs |
| Stock images | Hero, gallery, about, service areas | Replace Unsplash URLs with real photos |
| Company story / reviews | About, home, testimonials | Replace copy |

## 9. Implementation outline

1. Update `src/styles.css` with the new color tokens and chosen typography.
2. Update `src/routes/__root.tsx` with fonts, sitewide meta, and `<Toaster />` if needed.
3. Create a shared `src/lib/constants.ts` for phone/email/business hours placeholders.
4. Build shared components: `Header`, `Footer`, `MobileNav`, `QuoteButton`, `PhoneLink`, `SectionHeading`, `ServiceCard`, `TestimonialCard`, `GalleryImage`, `ContactForm`.
5. Create the 6 page routes.
6. Add SEO meta to each route.
7. Replace the `src/routes/index.tsx` placeholder with the Home page.
8. Verify responsive behavior, build output, and Formspree form wiring.
9. Provide instructions for Vercel deployment and placeholder swaps.

## 10. Open decisions before build

- Choose one of the **three typography pairings** in section 3.
- Confirm whether the gallery image count on the Home page should be 4 or 6 (plan assumes 4–6).
- Confirm whether the Service Areas page should include an actual embedded Google Maps iframe or a stylized map placeholder (plan assumes a placeholder).
