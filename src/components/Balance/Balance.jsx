import React from 'react';

import { useSelector } from 'react-redux';
import { getUserBalance } from 'redux/session/session-selectors';

import scss from './Balance.module.scss';
const Balance = props => {
  const userBalance = useSelector(getUserBalance);

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return (
    <div className={scss.balance}>
      <span className={scss.title}>your balance</span>
      <span className={scss.currency}>
        ₴
        <span className={scss.value}>
          {numberWithSpaces(userBalance.toFixed(2))}
        </span>
      </span>
    </div>
  );
};

export default Balance;
