import { useMediaQuery } from 'react-responsive';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

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
export const MobileRoute = ({redirectTo,}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <Outlet /> : <Navigate to={redirectTo} />;
};
