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
      <NotMobile>BigTABLE</NotMobile>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
