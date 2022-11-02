import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import { Mobile } from 'components/DeviceTypeControl/DeviseTypeController';

import scss from './NavBar.module.scss';
const NavBar = props => {

  return (
    <nav className={scss.navBar}>
      <ul className={scss.navList}>
        <li className={scss.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? scss.activeLink : scss.primaryLink
            }
            to="/home"
          >
            <div className={scss.navIcon}></div>
            <span className={scss.navText}>Home</span>
          </NavLink>
        </li>
        <li className={scss.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? scss.activeLink : scss.primaryLink
            }
            to="/statistics"
          >
            <div className={scss.navIcon}></div>
            <span className={scss.navText}>Statistics</span>
          </NavLink>
        </li>
        <Mobile>
          <li className={scss.navItem}>
            <NavLink
              className={({ isActive }) =>
                isActive ? scss.activeLink : scss.primaryLink
              }
              to="/exchangeMobile"
            >
              <div className={scss.navIcon}></div>
              <span className={scss.navText}>Exchange</span>
            </NavLink>
          </li>
        </Mobile>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;

