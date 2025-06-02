import React from 'react'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";



const NavPageIconSec = () => {

    const iconData = [
        {
            icon : <SlUser />,
            name : "Profile"
        },
        {
            icon : <FaRegHeart />
,
            name : "Wishlist"
        },
        {
            icon : <HiOutlineShoppingBag />,
            name : "Bag"
        }
    ];
  return (
    <div className='icon_data'>
    {
        iconData.map((item , index)=>{
            return(
                <a href='#' key={index} >
                    {/* <img src={item.icon} alt="" /> */}
                    {item.icon}
                    <p>{item.name}</p>
                </a>
            )
        })
    }
    </div>
  )
}

export default NavPageIconSec