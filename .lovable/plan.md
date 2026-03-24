
## Plan: Update App Store Button to Link to Live App Store URL

**What's changing:**
The App Store button currently blocks navigation (showing a toast/tooltip saying "Releasing soon"). Since the app is now live on the App Store, the button should redirect users to the actual App Store listing.

**Single file to edit:** `src/components/AppStoreButtons.tsx`

**Changes:**
1. Add `APP_STORE_URL = "https://apps.apple.com/in/app/skawsh/id6757456162"` constant alongside the existing Google Play URL constant
2. Remove the `handleAppStoreClick` function (which blocked navigation and showed the toast)
3. Remove the `Tooltip`/`TooltipProvider`/`TooltipTrigger` wrapper — no longer needed
4. Convert the App Store button to use `asChild` with an `<a>` tag (same pattern as the Google Play button), linking to the App Store URL with `target="_blank"`
5. Remove unused imports: `useState`, `Tooltip*`, `toast`

This change applies everywhere the `AppStoreButtons` component is used — Customer page, Business page, Footer, and Support page — all in one edit.
