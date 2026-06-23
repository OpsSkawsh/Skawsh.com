## Goal
Shift the homepage hero toward customer acquisition: drop the vendor CTA, surface the App Store + Google Play badges, and add the "currently available in" service-areas marquee directly inside the hero. Keep the existing marquee above the footer too.

## Changes

### 1. `src/components/HeroSection.tsx`
- Remove both `<Button>`s (the customer button and the "Join the Skawsh Network!" button) and the `useNavigate` import.
- Replace them with `<AppStoreButtons />` centered, using `size="default"` on desktop. Wrap with `justify-center` and a small top label like "Download the Skawsh app" (subtle, `text-sm opacity-80`).
- Below the badges, render a new in-hero marquee:
  - Small caption: "We are currently available in" (`text-sm opacity-80`, centered).
  - Right-to-left scrolling list of the 7 areas (Shekpet, Manikonda, TNGO Colony, Raidurg, Gachibowli, Wipro Circle, Kothaguda) using the existing `animate-marquee` keyframe.
  - Style for dark hero background: `text-white/60` items with `text-white/30` bullet separators, `hover:[animation-play-state:paused]`, `motion-reduce:animate-none`.
  - Container `overflow-hidden` with soft left/right fade masks (Tailwind `[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`) so the scroll edges feel clean against the blue hero.
- Keep existing headlines and supporting copy. Tighten vertical spacing so the new badges + marquee fit comfortably on mobile (`min-h-screen` stays; reduce some `mb-*` values).

### 2. `src/components/ServiceAreas.tsx`
- No change to behavior; it stays mounted above the footer (per user choice "Both in hero and before the footer").
- Extract the area list into a small shared module `src/components/serviceAreas.ts` exporting `SERVICE_AREAS: string[]` and import it from both `HeroSection` and `ServiceAreas` so the list stays in sync.

### 3. No changes
- `tailwind.config.ts` (already has `marquee` keyframe).
- `AppStoreButtons.tsx`, routing, SEO, footer, vendor pages (`/business` remains reachable via footer + direct URL).

## Out of scope
- Removing or hiding `/business` page or footer link.
- Restyling the existing `ServiceAreas` section above the footer.
- Any backend / analytics changes.

## Mobile / a11y notes
- Hero badges stack via the existing `flex-wrap` in `AppStoreButtons`; on small screens they sit centered and won't overflow.
- Marquee uses `overflow-hidden` + duplicated list to prevent horizontal page scroll on mobile.
- `aria-label` lists all 7 areas for screen readers; `motion-reduce:animate-none` respects reduced-motion users.
