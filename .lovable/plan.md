# Dinosaurs Landscaping — Website Plan

## 1. Project summary

A modern, responsive, static website for **Dinosaurs Landscaping**, a lawn care and landscaping company based in **Savannah, Georgia**, serving surrounding areas. Light-themed, mobile-first, built so a small-business owner can confidently invite customers onto their property. Logo and photos stay as placeholders until you provide the real assets; contact info is now real.

## 2. Tech stack & hosting

- **Framework:** TanStack Start (React 19 + Vite 7) on the existing template.
- **Styling:** Tailwind CSS v4, semantic design tokens in `src/styles.css`.
- **Deployment:** Vercel free tier as a static/frontend build.
- **Contact form:** Formspree endpoint `https://formspree.io/f/xjybkknv`, `method="POST"`, `name` attribute on every input, redirecting to a Thank You page.
- **No backend:** no database, auth, or server functions.
- **Light theme only.**
- **Images:** stock-style Unsplash placeholder URLs; every image uses alt text `"Freshly cut lawn"`.

## 3. Confirmed business details

| Item | Value |
|---|---|
| Phone | 912-677-7492 (`tel:+19126777492`) |
| Email | dinosaurslandscaping@gmail.com |
| Business hours | Monday – Saturday, 7:00 AM – 11:00 PM |
| Logo | `[LOGO]` placeholder until you send the file |
| Photos / reviews | Placeholders for now |

**Service areas (final list):** Savannah, Pooler, Montgomery, Tybee Island, Port Wentworth, Port Wentworth Junction, Skidaway Island, Georgetown, Whitemarsh Island, Wilmington Island, Isle of Hope — all GA.

## 4. Design system

### Color palette

White background anchored by a soft pastel green, with deeper forest green and a warm earthy neutral for contrast and CTAs.

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

Loaded via `<link>` in `src/routes/__root.tsx` and registered in `src/styles.css` with `@theme`.

### Components & interactions

- **Sticky header:** logo placeholder, nav links, "Get a Free Quote" button, click-to-call phone number.
- **Mobile nav:** hamburger menu overlay with nav links and both CTAs.
- **Buttons:** rounded, high-contrast; pastel green for quote actions, forest green for alternates. Subtle hover lift and shadow.
- **Cards:** service, testimonial, area, and gallery cards with soft borders and hover lift.
- **Smooth scroll** on in-page anchors; TanStack `<Link>` for page navigation.

## 5. Pages & routes

```text
/                  Home
/services          Services
/service-areas     Service Areas
/about             About Us
/gallery           Gallery
/contact           Contact / Get a Quote
/thank-you         Post-submission confirmation
/privacy-policy    Privacy Policy
$ (splat)          Custom 404 page
```

### 5.1 Home (`/`)

1. **Hero — mobile CTA above the fold.** Lawn background image, headline "Professional Lawn Care & Landscaping in Savannah, GA", subheadline, and two large thumb-friendly buttons visible without scrolling on phones: **"Call (912) 677-7492"** (`tel:+19126777492`, separate from the form) and **"Get a Free Quote"** (`/contact`).
2. **Intro / about blurb** with a link to `/about`.
3. **Services overview grid** — icon cards linking to `/services` and to the matching section anchors.
4. **Service area highlight** — full area list, links to `/service-areas`.
5. **Testimonials** — 3 placeholder 5-star reviews.
6. **Gallery carousel** — auto-looping carousel (Embla, already installed) driven by a folder of images.
7. **Final CTA banner** — phone number + quote button.

**Folder-driven carousel:** images live in `src/assets/gallery/` and are picked up automatically with Vite's `import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", { eager: true })`. Drop a file in the folder and it appears in the carousel; delete it and it disappears. No code edits needed. Optional subfolders `lawn-care/` and `pressure-washing/` feed the Gallery page filter tabs. Until you send real photos, the folder holds placeholder images.

### 5.2 Services (`/services`)

**Lawn Maintenance:** mowing, weed eating, hedge trimming, planting, fertilization, weed control, herbicide application, shrub trimming/care, sod installation, aeration, spring & fall clean up, lawn & shrub program, flower bed clean-up (weed removal, pine straw, mulch installation), roof leaf blowing/cleaning, gutter cleaning.

**Pressure Washing:** siding, driveways, fences, porches, patios.

Each service is a card with a Lucide icon, a 1–2 sentence description, and an internal link to `/contact?service=<slug>` so the quote form pre-selects that service. Page ends with a CTA banner.

### 5.3 Service Areas (`/service-areas`)

- Savannah, GA highlighted as home base.
- Cards for each area with a short description and an internal link to `/contact`.
- **Real embedded Google Maps iframe** centered on Savannah, GA using the keyless embed form `https://www.google.com/maps?q=Savannah,+GA&output=embed` — no API key or billing account needed. If you later want custom pins per service area, that requires a Google Maps API key and I can swap it in.

### 5.4 About Us (`/about`)

- Company story (locally owned/operated, reliable, detail-oriented — placeholder copy).
- Why choose us: licensed & insured, free quotes, reliable scheduling, satisfaction guaranteed, locally rooted in Savannah.
- Placeholder crew photo section.
- CTA banner.

### 5.5 Gallery (`/gallery`)

- Filter tabs: All / Lawn Care / Pressure Washing, driven by the same `src/assets/gallery/` folder structure.
- Responsive grid with hover zoom; all alt text reads "Freshly cut lawn".
- CTA banner.

### 5.6 Contact / Get a Quote (`/contact`)

- Formspree form: Name, Phone, Email, Address, Service Needed (dropdown of all services), Message.
- Hidden `_next` field pointing to `/thank-you` so submission redirects there.
- Contact cards: phone (`tel:`), email (`mailto:`), business hours Mon–Sat 7 AM – 11 PM, embedded Savannah map, social icon placeholders.

### 5.7 Thank You (`/thank-you`)

- Confirmation headline, expected response time, phone button for urgent requests, links back to Home / Services / Gallery.
- `noindex` meta so it stays out of search results.

### 5.8 Privacy Policy (`/privacy-policy`)

Lawn-care-appropriate sections: information collected (name, phone, email, service address, message), how it's used (quotes, scheduling, service delivery), Formspree as the form processor, Google Analytics and cookies, no selling of personal data, photo/before-after usage on the site, data retention, your rights and how to request deletion, children's privacy, policy updates, and contact info. Written as a solid starting template — have a lawyer review before relying on it.

### 5.9 Custom 404

Splat route `src/routes/$.tsx` with a grass-texture background image, the company logo, "This page went out to mow", and buttons back Home and to Contact. The root `notFoundComponent` is updated to match.

## 6. Global footer

Logo placeholder, quick links to every page (including Privacy Policy), service list, service-area list, phone/email/hours, social icons, copyright line.

## 7. Internal linking

Deliberate internal links so pages reinforce each other for local SEO:

- Header and footer link to all pages.
- Home links into Services, Service Areas, About, Gallery, Contact.
- Each service card links to `/contact?service=<slug>`.
- Service Areas cards link to `/contact`.
- Services page cross-links to Gallery ("see this work") and Service Areas.
- About links to Services and Contact.
- Thank You and 404 link back to Home, Services, and Contact.

## 8. SEO

- Unique `head()` per route: title, meta description, canonical, `og:title`, `og:description`, `og:type`.
- Meta descriptions written per page, each naming Savannah, GA and the relevant service or area.
- Semantic HTML, single `<h1>` per page, headings that mention Savannah and the surrounding areas.
- LocalBusiness JSON-LD on the home page with name, phone, email, hours, and service area list.
- `robots.txt` and `sitemap.xml` covering all public routes.
- All image alt text: "Freshly cut lawn".

## 9. Google Analytics — yes, I can set this up

I can wire GA4 into the site. Two options:

1. **Connector (easiest):** I connect the Google Analytics connector in Lovable, and the measurement ID is injected automatically — you just approve the connection card.
2. **Manual:** you create a GA4 property at analytics.google.com, send me the Measurement ID (`G-XXXXXXXXXX`), and I hardcode the gtag snippet.

Either way I'll add the gtag script plus SPA page-view tracking on route changes so every page is counted, and mention analytics cookies in the privacy policy. Tell me which route you prefer; if you don't say, I'll build with a clearly-marked `G-XXXXXXXXXX` placeholder you can swap later.

## 10. What I still need from you

| Item | Status |
|---|---|
| Company logo file | Waiting — using `[LOGO]` placeholder |
| GA4 Measurement ID (or approval to use the connector) | Waiting — placeholder otherwise |
| Real project photos | Waiting — placeholders in `src/assets/gallery/` |
| Real customer reviews | Waiting — placeholder 5-star reviews |
| Social media profile URLs | Waiting — icons link to `#` |
| Exact street address (if you want it public) | Optional — map defaults to Savannah, GA |

Everything else on your list is doable as described: custom 404, above-fold mobile call CTA, internal links, thank-you page, meta descriptions, uniform alt text, privacy policy, embedded Google Map, and the folder-driven carousel.

## 11. Implementation outline

1. Update `src/styles.css` with the palette and Outfit/Figtree tokens; load fonts via `<link>` in `__root.tsx`.
2. Create `src/lib/site-config.ts` holding phone, email, hours, service list, and service areas so everything reads from one place.
3. Create `src/assets/gallery/` (with `lawn-care/` and `pressure-washing/`) plus the glob helper.
4. Build shared components: `Header`, `MobileNav`, `Footer`, `QuoteButton`, `CallButton`, `SectionHeading`, `ServiceCard`, `TestimonialCard`, `GalleryCarousel`, `AreaCard`, `ContactForm`, `CtaBanner`, `MapEmbed`.
5. Replace `src/routes/index.tsx` with the Home page; add the other 7 routes plus the `$.tsx` 404.
6. Add per-route SEO metadata and the JSON-LD block.
7. Add analytics init + route-change page views.
8. Write `robots.txt` and `sitemap.xml`.
9. Verify responsive layout, above-fold mobile CTA, carousel looping, map embed, and Formspree redirect to `/thank-you`.
