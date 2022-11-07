import React from 'react';

import { useSelector } from 'react-redux';
import { getUserBalance } from 'redux/session/session-selectors';

import scss from './Balance.module.scss'
const Balance = props => {
  const userBalance = useSelector(getUserBalance);
  return (
    <div className={scss.balance}>
      <span className={scss.title}>your balance</span>
      <span className={scss.value}>₴ {userBalance}</span>
    </div>
  );
};



export default Balance;
