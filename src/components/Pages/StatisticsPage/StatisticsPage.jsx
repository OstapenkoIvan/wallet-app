import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { financeSelectors, financeOperation } from 'redux/finance';

import DateSelect from '../../DateSelect/DateSelect';
import scss from './StatisticsPage.module.scss';

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const stasticsSummary = useSelector(financeSelectors.getSummary);
  const { categoriesSummary, expenseSummary, incomeSummary } =
    stasticsSummary || {};
  const preparedArray = categoriesSummary?.filter(
    item => item.type === 'EXPENSE'
  );

  useEffect(() => {
    dispatch(
      financeOperation.getSummaryThunk({
        month: 11,
        year: 2022,
      })
    );
  }, [dispatch]);

  return (
    <div className={scss.Statistics}>
      <div className={scss.chartWrapper}>
        <h2 className={scss.statisticsTitle}>Statistics</h2>
        {stasticsSummary && <StatisticsChart statChartData={preparedArray} />}
      </div>
      <div className={scss.tableWrapper}>
        <DateSelect />
        {stasticsSummary && (
          <StatisticsTable
            statData={{ preparedArray, expenseSummary, incomeSummary }}
          />
        )}
      </div>
    </div>
  );
};

export default StatisticsPage;
