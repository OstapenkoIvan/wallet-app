import React from 'react';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getTransactions } from 'redux/finance/finance-selectors';
import Balance from 'components/Balance/Balance';

import NavBar from 'components/AppBar/NavBar/NavBar';
import Currency from 'components/Currency';
import { NotMobile } from 'components/DeviceTypeControl/DeviseTypeController';

import scss from './AppBar.module.scss';

const AppBar = () => {
  // const userBalance = useSelector(getTransactions);

  // const totalBalance = userBalance[userBalance.length - 1]?.balanceAfter;

  return (
    <div className={scss.appBarWrapper}>
      <div className={scss.AppBar}>
        <NavBar />

        <NotMobile>
          <Balance />
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
