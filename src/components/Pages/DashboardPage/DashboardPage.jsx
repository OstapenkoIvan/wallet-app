import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

import scss from './DashboardPage.module.scss';
const DashboardPage = props => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Outlet />
    </div>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;
