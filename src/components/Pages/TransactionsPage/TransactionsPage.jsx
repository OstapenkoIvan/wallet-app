// import PropTypes from 'prop-types';
import TableMobile from 'components/TableMobile/TableMobile';
import TableTransactions from 'components/TableTransactions/TableTransactions';
import {
  NotMobile,
  Mobile,
} from 'components/DeviceTypeControl/DeviseTypeController';
import scss from './TransactionsPage.module.scss';
// import CreateTransaction from 'components/CreateTransaction/CreateTransaction';

import { useSelector } from 'react-redux';
import { financeSelectors } from 'redux/finance';

const TransactionsPage = props => {
  const transactions = useSelector(financeSelectors.getTransactions);

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
      {/* <CreateTransaction /> */}
    </div>
  );
};

// TransactionsPage.propTypes = {};

export default TransactionsPage;
