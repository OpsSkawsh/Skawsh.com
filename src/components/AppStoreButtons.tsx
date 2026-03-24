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
  const appStoreBadgeHeight = isSmall ? 40 : 56;
  // Google Play badge has ~20% built-in padding, so increase height to match visual size
  const googlePlayBadgeHeight = isSmall ? 53 : 74;

  return (
    <div className={`flex ${isSmall ? 'flex-col sm:flex-row gap-2' : 'flex-col sm:flex-row gap-3 sm:gap-4'} ${className}`}>
      {/* App Store Badge */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity inline-block"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          style={{ height: `${badgeHeight}px`, width: 'auto' }}
        />
      </a>

      {/* Google Play Badge */}
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity inline-block"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          style={{ height: `${badgeHeight}px`, width: 'auto' }}
        />
      </a>
    </div>
  );
};

export default AppStoreButtons;
