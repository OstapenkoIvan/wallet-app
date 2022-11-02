import React from 'react';
import PropTypes from 'prop-types';
import { Mobile } from 'components/DeviceTypeControl/DeviseTypeController';
import scss from './ExchangeMobilePage.module.scss';
const ExchangeMobilePage = props => {
  return (
    <Mobile>
      <div className={scss.currencyTable}>currency table</div>
    </Mobile>
  );
};

ExchangeMobilePage.propTypes = {};

export default ExchangeMobilePage;
