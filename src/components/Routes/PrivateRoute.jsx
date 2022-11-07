import { Suspense } from 'react';
import PropTypes from 'prop-types';
import AppLoader from 'components/AppLoader/AppLoader';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sessionSelectors } from 'redux/session';
export default function PrivateRoute({ redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(sessionSelectors.getIsAuth);

  return isLoggedIn ? (
    <Suspense fallback={<AppLoader isLoading={true} global={true} />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} replace={true} />
  );
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
