import React from 'react'
import NavCatSec from './NavCatSec'
import logo from '../../assets/img/logo.webp'
import NavSearchSec from './NavSearchSec'
import NavPageIconSec from './NavPageIconSec'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav_item">
    <img src={logo} alt="" />
    <NavCatSec/>
    </div>
    <div className="navbar_right">
    <NavSearchSec/>
    <NavPageIconSec/>
    </div>

    </div>
  )
}

export default Navbar