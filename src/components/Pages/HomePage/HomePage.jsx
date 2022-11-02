import React from 'react';
import PropTypes from 'prop-types';
import {
  NotMobile,
  Mobile,
} from 'components/DeviceTypeControl/DeviseTypeController';
import scss from './HomePage.module.scss';

const HomePage = props => {
  return (
    <div className={scss.HomePage}>
      <Mobile>LittleTABLE</Mobile>
      <NotMobile>
        <div className={scss.HomeTableBox}>
          <span>HOME BIG TABLE </span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur nobis inventore tempore odio eius. Hic dolorem commodi
            excepturi suscipit dignissimos temporibus pariatur accusantium
            illum. Maiores enim asperiores dolore saepe aut!
          </span>
        </div>
      </NotMobile>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
