
## Plan: Replace Custom Buttons with Official Store Badge Images

**What's changing:**
The current buttons use custom SVG icons + styled text. The user wants the official Google Play and App Store badge images — exactly as shown in the reference (the classic black pill-shaped official badges with the real logos).

**Approach:**
Use the official badge images hosted by Google and Apple as `<img>` elements wrapped in `<a>` links. This is the standard implementation used on virtually every website. No custom Button component needed — just linked images with proper sizing.

- **Google Play badge**: Official PNG from `https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png`
- **App Store badge**: Official SVG/PNG from Apple's media services

**File to edit:** `src/components/AppStoreButtons.tsx`

**Specific changes:**
1. Remove the `Button` import and all custom-styled button markup
2. Replace each button with a plain `<a>` tag containing an `<img>` of the official badge
3. Keep the same `size` prop logic — `default` renders larger badges (height ~56px), `small` renders compact badges (height ~40px)
4. Keep the same URLs (`APP_STORE_URL` and `GOOGLE_PLAY_URL`) and `target="_blank"` behavior
5. Add `hover:opacity-80 transition-opacity` on the `<a>` tags for a subtle hover effect

**Badge sources:**
- Google Play: `https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png` (official Google-hosted)
- App Store: `https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83` (official Apple-hosted)

This is a single-file change that automatically updates all pages where `AppStoreButtons` is used (Customer, Business, Footer, Support).
