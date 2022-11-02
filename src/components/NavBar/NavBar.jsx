import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import scss from './NavBar.module.scss';
const NavBar = props => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <nav className={scss.navBar}>
      <ul className={scss.navList}>
        {/* <li className={scss.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? scss.activeLink : scss.primaryLink
            }
            to="/signin"
          >
            <div className={scss.navIcon}></div>
            <span className={scss.navText}>Вхід</span>
          </NavLink>
        </li>
        <li className={scss.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? scss.activeLink : scss.primaryLink
            }
            to="/signup"
          >
            <div className={scss.navIcon}></div>
            <span className={scss.navText}>Реєстрація</span>
          </NavLink>
        </li> */}
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
        {isMobile && (
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
        )}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: 'underline',
  };

  let activeClassName = 'underline';

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="messages"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="tasks">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Tasks
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
