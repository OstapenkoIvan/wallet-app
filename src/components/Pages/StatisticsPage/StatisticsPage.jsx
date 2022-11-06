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

  useEffect(() => {
    if (stasticsSummary) return;
    dispatch(
      financeOperation.getSummaryThunk({
        month: 11,
        year: 2022,
      })
    );
  }, [dispatch, stasticsSummary]);

  return (
    <div className={scss.Statistics}>
      <div className={scss.chartWrapper}>
        <h2 className={scss.statisticsTitle}>Statistics</h2>
        {/* <StatisticsChart statChartData={preparedData} /> */}
        {stasticsSummary && <StatisticsChart statChartData={stasticsSummary} />}
      </div>
      <div className={scss.tableWrapper}>
        <DateSelect />
        {stasticsSummary && <StatisticsTable statData={stasticsSummary} />}
      </div>
    </div>
  );
};

export default StatisticsPage;
