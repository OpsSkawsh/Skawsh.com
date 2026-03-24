import React from 'react';
import { Button } from '@/components/ui/button';

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

  return (
    <div className={`flex ${isSmall ? 'flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3' : 'flex-col sm:flex-row gap-3 sm:gap-4'} ${className}`}>
      {/* App Store Button */}
      <Button
        asChild
        size={isSmall ? 'default' : 'lg'}
        variant="default"
        className={`bg-black text-white hover:bg-black/90 ${isSmall ? 'px-3 py-2 h-auto' : 'h-14 sm:h-16 px-6 sm:px-8'} rounded-lg w-full sm:w-auto`}
      >
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          {/* Apple Logo */}
          <svg className={`${isSmall ? 'w-5 h-5' : 'w-7 h-7'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div className="text-left">
            <div className={`${isSmall ? 'text-[10px]' : 'text-xs'} opacity-80`}>Download on the</div>
            <div className={`${isSmall ? 'text-sm' : 'text-base sm:text-lg'} font-semibold`}>App Store</div>
          </div>
        </a>
      </Button>
      
      {/* Google Play Button */}
      <Button
        asChild
        size={isSmall ? 'default' : 'lg'}
        variant="default"
        className={`bg-black text-white hover:bg-black/90 ${isSmall ? 'px-3 py-2 h-auto' : 'h-14 sm:h-16 px-6 sm:px-8'} rounded-lg w-full sm:w-auto`}
      >
        <a 
          href={GOOGLE_PLAY_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          {/* Google Play Logo */}
          <svg className={`${isSmall ? 'w-5 h-5' : 'w-7 h-7'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
          </svg>
          <div className="text-left">
            <div className={`${isSmall ? 'text-[10px]' : 'text-xs'} opacity-80`}>GET IT ON</div>
            <div className={`${isSmall ? 'text-sm' : 'text-base sm:text-lg'} font-semibold`}>Google Play</div>
          </div>
        </a>
      </Button>
    </div>
  );
};

export default AppStoreButtons;
