import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { sessionSelectors } from 'redux/session';

export default function PublicRoute({
  redirectDest = 'login',
  restricted = false,
}) {
  const isLoggedIn = useSelector(sessionSelectors.getIsAuth);
  const isLoading = useSelector(sessionSelectors.getIsLoading);
  const shouldRedirect = isLoggedIn && restricted;

  const location = useLocation();
  let from = location.state?.from?.pathname || '';

  return shouldRedirect && !isLoading ? (
    <Navigate to={from ? from : redirectDest} replace />
  ) : (
    <Outlet />
  );
}
