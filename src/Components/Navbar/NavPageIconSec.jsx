import React, { useEffect } from 'react'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from "../../store/reducers/CartReducer";

import { TiHomeOutline } from "react-icons/ti";



const NavPageIconSec = () => {

    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getCartData());
    }, [])
    
      const { cart } = useSelector((state) => state.CartReducer);

   let CartData = cart?.length || 0;
   let wistlistData = 2;

    const iconData = [
        {
            icon : <SlUser />,
            name : "Profile",
            page : "Profile",
            
        },
        {
            icon : <FaRegHeart />,
            name : "Wishlist",
            page: "wishlist",
           value  : wistlistData,

        },
        {
            icon : <TiHomeOutline />,
            name : "Home",
            page: "/",
           value  : "",

        },
        {
            icon : <HiOutlineShoppingBag />,
            name : "Bag",
            page: "checkout/cart",
           value  :CartData || 0,

        }
    ];
  return (
    <div className='icon_data'>
    {
        iconData.map((item , index)=>{
            return(
                <Link to={`${item.page}`} key={index} >
                    {/* <img src={item.icon} alt="" /> */}
                    <div className='hold'>{item.icon}
                        {
                            item.value ? (<div className="num">{item.value}</div>) : ""
                        }</div>
                    <p>{item.name}</p>
                    
                </Link>
            )
        })
    }
    </div>
  )
}

export default NavPageIconSec