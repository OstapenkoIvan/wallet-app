import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import PropTypes from 'prop-types';

import NavBar from 'components/AppBar/NavBar/NavBar';
// import Currency from 'components/Currency';
import {
  NotMobile,
  Mobile,
  MobileEndRoute,
} from 'components/DeviceTypeControl/DeviseTypeController';

import scss from './AppBar.module.scss';

const AppBar = () => {
  return (
    <div className={scss.appBarWrapper}>
      <div className={scss.AppBar}>
        <NavBar />
        <NotMobile>
          <div className={scss.balance}>
            <span className={scss.title}>your balance</span>
            <span className={scss.value}>₴ 651 651.00</span>
          </div>
        </NotMobile>

        <MobileEndRoute
          path={'/'}
          element={
            <div className={scss.balance}>
              <span className={scss.title}>your balance</span>
              <span className={scss.value}>₴ 651 651.00</span>
            </div>
          }
          end={true}
        />
      </div>

      <NotMobile>
        <div className={scss.Currency}>
          {/* <Currency /> */}
        </div>
      </NotMobile>
    </div>
  );
};

AppBar.propTypes = {};

export default AppBar;
