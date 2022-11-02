import React from 'react';
import PropTypes from 'prop-types';
import logoImg from '../../imgs/logo.png';
import scss from './Header.module.scss';

const Header = props => {
  return (
    <div className={scss.Header}>
      <div className={scss.logoBox}>
        <img className={scss.logoImg} src={logoImg} alt="logo" />
        <span className={scss.logoText}>Wallet</span>
      </div>
      
    </div>
  );
};

Header.propTypes = {};

export default Header;
