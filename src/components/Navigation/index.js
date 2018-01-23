import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

export default function () {
  return (
    <nav>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/repositories'>User repositories</NavLink>
    </nav>
  )
}
