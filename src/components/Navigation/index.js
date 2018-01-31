import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './styles.scss'

function Navigation (props) {
  const { curUser } = props

  return (
    <nav>
      <NavLink exact to='/'>Home</NavLink>
      { curUser && <NavLink to='/repositories'>User repositories</NavLink> }
    </nav>
  )
}

Navigation.propTypes = {
  curUser: PropTypes.string
}

export default Navigation
