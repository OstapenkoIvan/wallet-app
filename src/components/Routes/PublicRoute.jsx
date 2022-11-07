import React, { Suspense } from 'react';
import AppLoader from 'components/AppLoader/AppLoader';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/session/session-selectors';
export default function PublicRoute({ redirectTo, end, ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuth);

  return isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<AppLoader isLoading={true} global={true} />}>
      <Outlet />
    </Suspense>
  );
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
};
