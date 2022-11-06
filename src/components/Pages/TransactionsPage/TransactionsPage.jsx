import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import TableMobile from 'components/TableMobile/TableMobile';
import TableTransactions from 'components/TableTransactions/TableTransactions';
import TableContext from 'components/Table/TableContext';
import Table from 'components/Table/Table';
import {
  NotMobile,
  Mobile,
} from 'components/DeviceTypeControl/DeviseTypeController';

import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactionsThunk,
  addTransactionThunk,
} from 'redux/finance/finance-operation';
import scss from './TransactionsPage.module.scss';

const TransactionsPage = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsThunk());
  }, [dispatch]);
  return (
    <div className={scss.TransactionsPage}>
      <Mobile>
        <TableMobile />
      </Mobile>
      <NotMobile>
        <div className={scss.HomeTableBox}>
          {/* <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur nobis inventore tempore odio eius. Hic dolorem commodi
            excepturi suscipit dignissimos temporibus pariatur accusantium
            illum. Maiores enim asperiores dolore saepe aut!
          </span> */}
          {/* <TableTransactions /> */}
          <TableContext>
            <Table tableData></Table>
          </TableContext>
        </div>
      </NotMobile>
    </div>
  );
};

// TransactionsPage.propTypes = {};

export default TransactionsPage;
