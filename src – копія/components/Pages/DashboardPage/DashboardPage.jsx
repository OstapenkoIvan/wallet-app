import React from 'react';
// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import AppBar from 'components/AppBar/AppBar';

import scss from './DashboardPage.module.scss';
const DashboardPage = props => {
  return (
    <div className={scss.blur}>
      <Header />
      <div className="container">
        <div className={scss.gridPage}> 
          <div className={scss.AppBarBox}><AppBar /></div>
          <div className={scss.OutletBox}><Outlet /></div>
        </div>
      </div>
    </div>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;
// AppBarBox
// OutletBox