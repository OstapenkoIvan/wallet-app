import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
export default function PublicRoute({ redirectTo, ...routeProps }) {
  const { isLoggedIn } = useSelector(selectUserData);

  return !isLoggedIn ? <Outlet/> : <Navigate to={redirectTo} replace={true} />;
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
};