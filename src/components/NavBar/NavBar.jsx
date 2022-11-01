import React from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom'

import scss from './NavBar.module.scss'
const NavBar = props => {
  
  return (
    <div>
      <ul>
        <li><NavLink to='/'>Вхід</NavLink></li>
        <li><NavLink to='/signup'>Реєстрація</NavLink></li>
        <li><NavLink to='/home'>Домашня</NavLink></li>
        <li><NavLink to='/statistics'>Статистика</NavLink></li>
        <li><NavLink to='/exchangeMobile'>Курс валют МОБІЛ</NavLink></li>
      </ul>
    </div>
  )
}

NavBar.propTypes = {}

export default NavBar