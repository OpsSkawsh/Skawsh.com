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
  const badgeHeight = isSmall ? 44 : 56;
  // Both assets share the same 3:1 canvas (1200x400) so equal height = equal width
  const badgeWidth = badgeHeight * 3;

  const imgStyle: React.CSSProperties = {
    height: `${badgeHeight}px`,
    width: `${badgeWidth}px`,
    display: 'block',
    objectFit: 'contain',
  };

  return (
    <div className={`flex flex-row flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity flex-shrink-0"
      >
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          style={imgStyle}
          loading="eager"
          decoding="async"
          width={badgeWidth}
          height={badgeHeight}
        />
      </a>

      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity flex-shrink-0"
      >
        <img
          src={googlePlayBadge}
          alt="Get it on Google Play"
          style={imgStyle}
          loading="eager"
          decoding="async"
          width={badgeWidth}
          height={badgeHeight}
        />
      </a>
    </div>
  );
};

export default AppStoreButtons;
