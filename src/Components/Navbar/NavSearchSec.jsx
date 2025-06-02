import React from 'react'
import { IoSearch } from "react-icons/io5";

const NavSearchSec = () => {
  return (
    <div className='search_bar'>
     <IoSearch />

    <input type="text" placeholder='Search for products,brands and more'/>
    </div>
  )
}

export default NavSearchSec