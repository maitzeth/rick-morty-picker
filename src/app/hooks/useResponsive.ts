import {useMedia} from 'react-use';

export const useResponsive = () => {
  const isMobile = useMedia('(max-width: 639px)');
  const isTablet = useMedia('(min-width: 640px)');
  const isDesktop = useMedia('(min-width: 1024px)');
    
  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
