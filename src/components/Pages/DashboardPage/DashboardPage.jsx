import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

import scss from './DashboardPage.module.scss';
const DashboardPage = props => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={scss.wrapper}>
          <div>
            <NavBar />
            <div className={scss.currencyTable}>currency table</div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;
