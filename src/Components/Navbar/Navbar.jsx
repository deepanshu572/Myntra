import React from 'react'
import NavCatSec from './NavCatSec'
import logo from '../../assets/img/logo.webp'
import NavSearchSec from './NavSearchSec'
import NavPageIconSec from './NavPageIconSec'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav_item">
          <Link to={"/"} >
    <img src={logo} alt="" />
    </Link>
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