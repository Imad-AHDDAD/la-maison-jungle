import React from 'react'
import logo from './assets/logo.png'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo-container'>
            <img className='logo' alt='logo' src={logo} />
            <label>La maison Jungle</label>
        </div>
    </nav>
  )
}

export default Navbar