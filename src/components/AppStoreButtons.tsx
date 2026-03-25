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
  // Use a single visual height for both badges; Google Play image has built-in padding
  // so we crop it using a fixed-size container with overflow hidden to match App Store visually
  const badgeHeight = isSmall ? 40 : 56;
  // Google Play has ~23% vertical padding baked in, so render it taller to fill container
  const gpHeight = Math.round(badgeHeight * 1.33);

  return (
    <div className={`flex items-center ${isSmall ? 'flex-col sm:flex-row gap-2' : 'flex-col sm:flex-row gap-3 sm:gap-4'} ${className}`}>
      {/* App Store Badge */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity inline-flex items-center"
        style={{ height: `${badgeHeight}px` }}
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          style={{ height: `${badgeHeight}px`, width: 'auto', display: 'block' }}
        />
      </a>

      {/* Google Play Badge — rendered taller then clipped to match visual height */}
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity inline-flex items-center overflow-hidden"
        style={{ height: `${badgeHeight}px` }}
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          style={{ height: `${gpHeight}px`, width: 'auto', display: 'block', marginTop: `-${Math.round((gpHeight - badgeHeight) / 2)}px` }}
        />
      </a>
    </div>
  );
};

export default AppStoreButtons;

export default AppStoreButtons;
