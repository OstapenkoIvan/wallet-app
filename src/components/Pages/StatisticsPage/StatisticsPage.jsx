import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperation } from 'redux/finance';
import Modal from 'components/Modal/Modal';
import FormAddTransaction from 'components/ModalAddTransactions/ModalAddTransactions';
import DateSelect from '../../DateSelect/DateSelect';
import scss from './StatisticsPage.module.scss';

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const stasticsSummary = useSelector(financeSelectors.getSummary);
  const transactions = useSelector(financeSelectors.getTransactions);
  const { categoriesSummary, expenseSummary, incomeSummary } =
    stasticsSummary || {};
  const preparedArray = categoriesSummary?.filter(
    item => item.type === 'EXPENSE'
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(
      financeOperation.getSummaryThunk({
        month: 11,
        year: 2022,
      })
    );
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={scss.Statistics}>
      {transactions.length > 0 ? (
        <>
          <div className={scss.chartWrapper}>
            <h2 className={scss.statisticsTitle}>Statistics</h2>
            {stasticsSummary && (
              <StatisticsChart statChartData={preparedArray} />
            )}
          </div>
          <div className={scss.tableWrapper}>
            <DateSelect />
            {stasticsSummary && (
              <StatisticsTable
                statData={{ preparedArray, expenseSummary, incomeSummary }}
              />
            )}
          </div>
        </>
      ) : (
        <div className={scss.noStatisticContainer}>
          <h1 className={scss.noStatisticMessage}>
            You should{' '}
            <span
              className={scss.modalOpenSpan}
              tabIndex="1"
              onClick={toggleModal}
            >
              add the first transaction
            </span>{' '}
            to show statistics information
          </h1>
          {isModalOpen && (
            <Modal defaultButton={false} handleToggle={toggleModal}>
              <FormAddTransaction onClose={toggleModal} />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default StatisticsPage;
