## Goal
1. Improve on-page SEO so Skawsh has a fighting chance ranking for "laundry near me" and "dry cleaners near me" (Hyderabad-area intent).
2. Keep the existing `public/sitemap.xml` healthy and discoverable.
3. Add a "Currently available in" service-area marquee right above the Footer, with grayed-out area names scrolling right → left continuously.

## SEO changes

**Keyword targeting (local intent)**
The site currently sells the brand ("Laundry Isn't an Extra…") but never mentions the actual service terms or city. Search engines have nothing to match against "laundry near me" / "dry cleaners near me". Fix by weaving target terms into real copy + metadata — no keyword stuffing.

- `index.html`
  - `<title>` → `Skawsh — Laundry & Dry Cleaners Near Me | Hyderabad Pickup & Delivery`
  - `<meta name="description">` → mentions laundry, dry cleaning, near me, Hyderabad, pickup & delivery via app.
  - Add `<meta name="keywords">` (low weight but harmless) with the target terms + area names.
  - Add `<meta name="geo.region" content="IN-TG">`, `<meta name="geo.placename" content="Hyderabad">`.
  - Upgrade Organization JSON-LD → `LocalBusiness` (type `LaundryService`) with `address`, `areaServed` (the 7 localities), `telephone`, `email`, `sameAs` (Instagram, LinkedIn, X, Reddit, YouTube).
  - Add a `Service` JSON-LD block listing "Laundry pickup and delivery" and "Dry cleaning" with `areaServed`.

- `src/components/SEO.tsx` — extend props to also output `<meta name="keywords">` when supplied (optional).

- `src/pages/Index.tsx` — update SEO title/description to lead with "Laundry & Dry Cleaners Near Me in Hyderabad" and pass a `LocalBusiness` JSON-LD specific to the home route.

- `src/pages/Customer.tsx` — title/description tuned for "laundry pickup and delivery near me".

- `src/components/HeroSection.tsx` — add a short secondary line under the existing H2 (kept subtle, doesn't break the design) that naturally includes "laundry and dry cleaning near you in Hyderabad — pickup & delivery via the Skawsh app". This gives crawlers the keyword in visible body copy, which is what actually moves rankings.

- `src/components/AboutSection.tsx` (or the existing WhyChoose copy) — light copy tweak so the words "dry cleaning" and "laundry near me" appear once, contextually.

- `public/llms.txt` — refresh the one-line summary to include "laundry and dry cleaning near you in Hyderabad" and list the served areas.

**Sitemap**
`public/sitemap.xml` already exists and is correct. Action: just bump `<lastmod>` on the home URL to today so the next crawl picks up the refreshed home page. No structural changes.

**robots.txt** — already references the sitemap. No change.

**Honest caveat for the user (not code):** ranking #1 for "laundry near me" is dominated by Google Maps / Google Business Profile results, not website SEO alone. On-page SEO helps, but to actually appear in the local pack the user needs a verified Google Business Profile for each service area. I'll mention this in the closing note, not the code.

## Service-area marquee

New component `src/components/ServiceAreas.tsx`:

- Section rendered in `src/pages/Index.tsx` directly above `<Footer />`.
- Heading line (centered, muted): "We are currently available in"
- Below it, a single-row horizontal marquee containing the 7 area names separated by a bullet (•), styled in muted/gray text (`text-gray-400`).
- Animation: CSS keyframe scrolling the track from right → left, looping seamlessly by duplicating the list inline. Pauses on hover. Duration ~30s for a smooth, slow pace.
- Mobile-safe: wrapper has `overflow-hidden` and `max-w-full`; respects the project's no-horizontal-scroll rule.
- Reduced-motion users: `motion-reduce:animate-none` so the row sits static.

Keyframe added to `tailwind.config.ts`:
```
"marquee": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } }
```
and `animation: { marquee: "marquee 30s linear infinite" }`.

Areas list: Shekpet, Manikonda, TNGO Colony, Raidurg, Gachibowli, Wipro Circle, Kothaguda.

## Files

**Create**
- `src/components/ServiceAreas.tsx`

**Edit**
- `index.html` (title, description, keywords, geo, LocalBusiness + Service JSON-LD)
- `src/components/SEO.tsx` (optional `keywords` prop)
- `src/pages/Index.tsx` (SEO copy + render `<ServiceAreas />` above `<Footer />`)
- `src/pages/Customer.tsx` (SEO copy)
- `src/components/HeroSection.tsx` (one extra keyword-rich line)
- `src/components/AboutSection.tsx` (minor copy tweak)
- `public/llms.txt` (refresh summary + areas)
- `public/sitemap.xml` (bump home `<lastmod>`)
- `tailwind.config.ts` (marquee keyframe + animation)

## Out of scope
- Creating per-area landing pages (e.g. `/laundry-gachibowli`) — bigger effort; can follow up if you want it.
- Google Business Profile setup — done outside the codebase by you.
