import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React from 'react';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
// import PropTypes from 'prop-types'
import scss from './StatisticsPage.module.scss';

const StatisticsPage = props => {
  return (
    <div className={scss.Statistics}>
      <div className={scss.chartWrapper}>
        <h2 className={scss.statisticsTitle}>Statistics</h2>
        <StatisticsChart />
      </div>
      <div className={scss.tableWrapper}>
        <div className={scss.selectWrapper}></div>
        <StatisticsTable />
      </div>
    </div>
  );
};

// StatisticsPage.propTypes = {}

export default StatisticsPage;
