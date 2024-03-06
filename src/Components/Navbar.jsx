import React, { useState } from 'react'
import "./nStyle.css"
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  

  return (

    <div className='nav'>
      <div className='nav-logo'>EV-olution</div>
      <ul className={showMenu ? 'nav-menu nav-menu-mobile' : 'nav-menu'}>
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className='nav-contact'>Contact</li>
      </ul>
      <div className='nav-menu-toggle' onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <FiX /> : <FiMenu />}
      </div>
    </div>
  )
}
