import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { NotMobile } from 'components/DeviceTypeControl/DeviseTypeController';

import Header from 'components/Header/Header';
import AppBar from 'components/AppBar/AppBar';
import NavBar from 'components/NavBar/NavBar';
import Currency from 'components/Currency';

import scss from './DashboardPage.module.scss';
const DashboardPage = props => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={scss.wrapper}>
          <div>
            <AppBar />
            <NotMobile>
              {/* <div className={scss.currencyTable}>currency table for NOT MOBILE</div> */}
              <Currency/>
            </NotMobile>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;
