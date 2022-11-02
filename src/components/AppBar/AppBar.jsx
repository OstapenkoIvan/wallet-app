import React from 'react'
import PropTypes from 'prop-types'

import NavBar from 'components/NavBar/NavBar'

import scss from './AppBar.module.scss'

const AppBar = props => {
  return (
    <div className={scss.AppBar}><AppBar/>
    <div className={scss.balance}>
      <span className={scss.text}>your balance</span>
      <span className={scss.value}>$ 651 651</span>
    </div>
    </div>
  )
}

AppBar.propTypes = {}

export default AppBar