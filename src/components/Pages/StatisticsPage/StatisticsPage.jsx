import StatisticsTable from 'components/StatisticsTable/StatisticsTable';
import React from 'react';
// import PropTypes from 'prop-types'
import scss from './StatisticsPage.module.scss';

const StatisticsPage = props => {
  return (
    <div className={scss.Statistics}>
      {/* <span>STATISTICS </span>
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        nobis inventore tempore odio eius. Hic dolorem commodi excepturi
        suscipit dignissimos temporibus pariatur accusantium illum. Maiores enim
        asperiores dolore saepe aut!
      </span> */}
      <StatisticsTable />
    </div>
  );
};

// StatisticsPage.propTypes = {}

export default StatisticsPage;
