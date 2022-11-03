import React from 'react';
import PropTypes from 'prop-types';
import { Mobile } from 'components/DeviceTypeControl/DeviseTypeController';

import Currency from 'components/Currency';

import scss from './ExchangeMobilePage.module.scss';
const ExchangeMobilePage = () => {
  return (
    <Mobile>
      <Currency/>
    </Mobile>
  );
};

ExchangeMobilePage.propTypes = {};

export default ExchangeMobilePage;
