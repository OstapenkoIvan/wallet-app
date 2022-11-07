import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/session/session-selectors';
export default function PublicRoute({ redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuth);

  return isLoggedIn ? <Navigate to={redirectTo}/> : <Outlet />;
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
};
