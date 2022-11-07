import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sessionSelectors } from 'redux/session';
export default function PrivateRoute({ redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(sessionSelectors.getIsAuth);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} replace={true} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
