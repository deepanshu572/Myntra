import React from 'react'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router';



const NavPageIconSec = () => {

    const iconData = [
        {
            icon : <SlUser />,
            name : "Profile",
            page : "Profile"
        },
        {
            icon : <FaRegHeart />,
            name : "Wishlist",
            page: "wishlist"
        },
        {
            icon : <HiOutlineShoppingBag />,
            name : "Bag",
            page: "checkout/cart"
        }
    ];
  return (
    <div className='icon_data'>
    {
        iconData.map((item , index)=>{
            return(
                <Link to={`${item.page}`} key={index} >
                    {/* <img src={item.icon} alt="" /> */}
                    {item.icon}
                    <p>{item.name}</p>
                </Link>
            )
        })
    }
    </div>
  )
}

export default NavPageIconSec