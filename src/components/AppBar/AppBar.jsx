import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getUserBalance } from 'redux/session/session-selectors';

import NavBar from 'components/AppBar/NavBar/NavBar';
import Currency from 'components/Currency';
import { NotMobile } from 'components/DeviceTypeControl/DeviseTypeController';

import scss from './AppBar.module.scss';

const AppBar = () => {
  const userBalance = useSelector(getUserBalance);

  return (
    <div className={scss.appBarWrapper}>
      <div className={scss.AppBar}>
        <NavBar />

        <NotMobile>
          <div className={scss.balance}>
            <span className={scss.title}>your balance</span>
            <span className={scss.value}>₴ {userBalance}</span>
          </div>
        </NotMobile>
      </div>

      <NotMobile>
        <Currency />
      </NotMobile>
    </div>
  );
};

AppBar.propTypes = {};

export default AppBar;
