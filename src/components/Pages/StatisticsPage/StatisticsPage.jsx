import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import { useEffect } from 'react';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import { useSelector } from 'react-redux';
import { getUserBalance } from 'redux/session/session-selectors';

// import PropTypes from 'prop-types'
import { preparedData } from './preparedData';
import scss from './StatisticsPage.module.scss';

const StatisticsPage = props => {
  console.log(preparedData);

  return (
    <div className={scss.Statistics}>
      <div className={scss.chartWrapper}>
        <h2 className={scss.statisticsTitle}>Statistics</h2>
        <StatisticsChart statChartData={preparedData} />
      </div>
      <div className={scss.tableWrapper}>
        <div className={scss.selectWrapper}>Selectors</div>
        <StatisticsTable statData={preparedData} />
      </div>
    </div>
  );
};

// StatisticsPage.propTypes = {}

export default StatisticsPage;
