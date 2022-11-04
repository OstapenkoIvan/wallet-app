import React from 'react';
import PropTypes from 'prop-types';
import TableMobile from 'components/TableMobile/TableMobile';
import TableTransactions from 'components/TableTransactions/TableTransactions';
import {
  NotMobile,
  Mobile,
} from 'components/DeviceTypeControl/DeviseTypeController';
import scss from './TransactionsPage.module.scss';

const TransactionsPage = props => {
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
          <TableTransactions />
        </div>
      </NotMobile>
    </div>
  );
};

TransactionsPage.propTypes = {};

export default TransactionsPage;
