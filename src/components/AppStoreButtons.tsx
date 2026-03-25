import React from 'react';

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.cresol.skawsh";
const APP_STORE_URL = "https://apps.apple.com/in/app/skawsh/id6757456162";

interface AppStoreButtonsProps {
  className?: string;
  size?: 'default' | 'small';
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  className = '',
  size = 'default'
}) => {
  const isSmall = size === 'small';

  // App Store badge natural ratio: 250x83 → ~3.01:1
  // Google Play badge has ~13% top/bottom padding baked in
  // We fix both badges to same width and let height auto-size from natural ratio

  const badgeWidth = isSmall ? 120 : 160;

  // GP image is wider (646x250 natural), so we compensate by scaling it down
  // so the inner artwork matches the App Store badge visual height
  const gpScale = 1.28; // accounts for built-in whitespace padding ratio

  return (
    <div className={`flex items-center ${isSmall ? 'flex-col sm:flex-row gap-1' : 'flex-col sm:flex-row gap-2 sm:gap-3'} ${className}`}>
      {/* App Store Badge */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          style={{ width: `${badgeWidth}px`, height: 'auto', display: 'block' }}
        />
      </a>

      {/* Google Play Badge — wider source image, scaled up to match visual size */}
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          style={{ width: `${Math.round(badgeWidth * gpScale)}px`, height: 'auto', display: 'block' }}
        />
      </a>
    </div>
  );
};

export default AppStoreButtons;
