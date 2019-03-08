import React from 'react'

import logo from './logo.png'

import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1>
        Où manger à
        <img className="logo" src={logo} alt="logo zenika" /> ?
      </h1>
    </header>
  )
}

export default Header