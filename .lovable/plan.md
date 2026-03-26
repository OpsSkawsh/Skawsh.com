
## Two Issues to Fix

**Issue 1 — Google Play badge loads late (flicker)**
The Google Play badge is fetched from an external Google URL at runtime. Until the image downloads, only the App Store badge is visible. The fix is to self-host both badges as local assets (`src/assets/`) so they're bundled with the app and always available instantly — no network round-trip needed.

**Issue 2 — Buttons stack vertically on mobile instead of side-by-side**
The container uses `flex-col sm:flex-row`, which stacks the badges on mobile (< 640px). Since the user's viewport is 390px wide, they always see stacked layout. The fix is to change the default direction to `flex-row` (always side-by-side), with `flex-wrap` to allow wrapping only if truly needed on very small screens.

---

## Plan

**Step 1 — Download and self-host both badge images**
- Save the App Store badge as `src/assets/app-store-badge.png`
- Save the Google Play badge as `src/assets/google-play-badge.png`
- Import them directly in `AppStoreButtons.tsx` so they're part of the JS bundle (zero load delay)

**Step 2 — Fix mobile layout in `AppStoreButtons.tsx`**
- Change container from `flex-col sm:flex-row` → `flex-row flex-wrap` so buttons always appear side-by-side on all screen sizes
- Keep `items-center` and consistent sizing logic

**Files changed:**
- `src/assets/app-store-badge.png` (new — copied from Apple's CDN)
- `src/assets/google-play-badge.png` (new — copied from Google's CDN)
- `src/components/AppStoreButtons.tsx` (use local imports, fix flex direction)
