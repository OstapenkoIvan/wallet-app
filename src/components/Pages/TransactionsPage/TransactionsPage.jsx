import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactionsThunk } from 'redux/finance/finance-operation';

import TableMobile from 'components/TableMobile/TableMobile';
import Balance from 'components/Balance/Balance';
import TableTransactions from 'components/TableTransactions/TableTransactions';

import {
  NotMobile,
  Mobile,
} from 'components/DeviceTypeControl/DeviseTypeController';

import scss from './TransactionsPage.module.scss';

const TransactionsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, [dispatch]);
  return (
    <div className={scss.TransactionsPage}>
      <Mobile>
        <div className={scss.wrapper}>
          <Balance />
          <TableMobile />
        </div>
      </Mobile>
      <NotMobile>
        <TableTransactions />
      </NotMobile>
    </div>
  );
};

export default TransactionsPage;
