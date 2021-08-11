import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to="/" activeStyle={{color: 'tomato'}}end>Home</NavLink> {' | '}
      <NavLink to="sobre" activeStyle={{color: 'tomato'}}end>Sobre</NavLink> {'  '}
      <p>Esse é o Header</p>
    </nav>
  )
}

export default Header
