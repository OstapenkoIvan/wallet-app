import { useMediaQuery } from 'react-responsive';
import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppLoader from 'components/AppLoader/AppLoader';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
export const NotMobile = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
const MobileRoute = ({ redirectTo }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? (
    <Suspense fallback={<AppLoader isLoading={true} global={true} />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default MobileRoute;
