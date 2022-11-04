import React from 'react';
// import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import AppBar from 'components/AppBar/AppBar';
import CreateTransaction from 'components/CreateTransaction/CreateTransaction';

import scss from './DashboardPage.module.scss';
const DashboardPage = ({children}) => {
  return (
    <>

      <div className={scss.blur}>
        <Header />
        <div className="container">
          <div className={scss.gridPage}>
            <div className={scss.AppBarBox}>
              <AppBar />
            </div>
            <div className={scss.OutletBox}>
              <Outlet />
              {children}
            </div>
          </div>
        </div>
      </div>
      <CreateTransaction/>

    </>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;
// AppBarBox
// OutletBox
