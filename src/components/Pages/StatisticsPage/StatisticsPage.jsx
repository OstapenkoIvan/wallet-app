import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React from 'react';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
// import PropTypes from 'prop-types'
import scss from './StatisticsPage.module.scss';

const StatisticsPage = props => {
  return (
    <div className={scss.Statistics}>
      <div className={scss.chartWrapper}>
        <StatisticsChart />
      </div>
      <div className={scss.tableWrapper}>
        <StatisticsTable />
      </div>
    </div>
  );
};

// StatisticsPage.propTypes = {}

export default StatisticsPage;
