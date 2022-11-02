import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { sprite } from 'assets/images/sprite';
import logoImg from '../../assets/images/logo.png';

import scss from './Header.module.scss';

const Header = props => {
  return (
    <div className={['container', scss.Header].join(' ')}>
      {/* <div className={[ scss.wrapper].join(' ')}> */}
        <div className={scss.logoBox}>
          <img className={scss.logoImg} src={logoImg} alt="logo" />
          <span className={scss.logoText}>Wallet</span>
        </div>
        <div className={scss.wrapper}>
          <span className={scss.userName}>ІМЯ</span>
          <Link>
            <span className={scss.exitLink}>
              <svg className={scss.svg}>
                <use href={`${sprite}#icon-logout`}></use>
              </svg>
              <span className={scss.exitText}>Exit</span>
            </span>
          </Link>
        </div>
      {/* </div> */}
    </div>
  );
};

Header.propTypes = {};

export default Header;
