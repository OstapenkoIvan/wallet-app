import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import TableMobile from 'components/TableMobile/TableMobile';
import TableTransactions from 'components/TableTransactions/TableTransactions';
import {
  NotMobile,
  Mobile,
} from 'components/DeviceTypeControl/DeviseTypeController';
import scss from './TransactionsPage.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { financeOperation, financeSelectors } from 'redux/finance';

const TransactionsPage = props => {
  const dispatch = useDispatch();
  const transactions = useSelector(financeSelectors.getTransactions);

  useEffect(() => {
    dispatch(financeOperation.getTransactionsThunk());
  }, [dispatch]);

  return (
    <div className={scss.TransactionsPage}>
      <Mobile>
        <TableMobile data={transactions} />
      </Mobile>
      <NotMobile>
        <div className={scss.HomeTableBox}>
          <TableTransactions data={transactions} />
        </div>
      </NotMobile>
    </div>
  );
};

// TransactionsPage.propTypes = {};

export default TransactionsPage;
