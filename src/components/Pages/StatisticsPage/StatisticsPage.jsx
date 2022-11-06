import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';

import { preparedData } from './preparedData';
import scss from './StatisticsPage.module.scss';

const StatisticsPage = () => {
  return (
    <div className={scss.Statistics}>
      <div className={scss.chartWrapper}>
        <h2 className={scss.statisticsTitle}>Statistics</h2>
        <StatisticsChart statChartData={preparedData} />
      </div>
      <div className={scss.tableWrapper}>
        <div className={scss.selectWrapper}>Selectors від Софії</div>
        <StatisticsTable statData={preparedData} />
      </div>
    </div>
  );
};

export default StatisticsPage;
