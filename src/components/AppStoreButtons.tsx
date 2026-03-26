import React from 'react';
import appStoreBadge from '@/assets/app-store-badge.png';
import googlePlayBadge from '@/assets/google-play-badge.png';

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
  const badgeHeight = isSmall ? 40 : 52;
  // GP image has ~13% built-in padding top/bottom, compensate so visual height matches
  const gpHeight = Math.round(badgeHeight * 1.28);

  return (
    <div className={`flex flex-row flex-wrap items-center gap-2 ${className}`}>
      {/* App Store Badge */}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          style={{ height: `${badgeHeight}px`, width: 'auto', display: 'block' }}
        />
      </a>

      {/* Google Play Badge — taller source to compensate for built-in whitespace */}
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src={googlePlayBadge}
          alt="Get it on Google Play"
          style={{ height: `${gpHeight}px`, width: 'auto', display: 'block' }}
        />
      </a>
    </div>
  );
};

export default AppStoreButtons;
