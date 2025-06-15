import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlUser } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from "../../store/reducers/CartReducer";
import { TbCategory } from "react-icons/tb";

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
            icon : <TiHomeOutline />,
            name : "Home",
            page: "/",
           value  : "",

        },
         {
            icon : <TbCategory />,
            name : "Category",
            page: "/AllProduct/All?Cid=0",
           value  : "",

        },
       
        {
            icon : <FaRegHeart />,
            name : "Wishlist",
            page: "wishlist",
           value  : wistlistData,

        },
       
        {
            icon : <HiOutlineShoppingBag />,
            name : "Bag",
            page: "checkout/cart",
           value  :CartData || 0,

        },
         {
            icon : <SlUser />,
            name : "Profile",
            page : "Profile",
            
        },
    ];

    const [selectIndex, setselectIndex] = useState();

    const HighLightFnc = (index)=>{
        console.log('====================================');
        console.log(index);
        console.log('====================================');
        setselectIndex(index)

    }
  return (
    <div className='icon_data'>
    {
        iconData.map((item , index)=>{
            return(
                <Link to={`${item.page}`} key={index} onClick={()=>HighLightFnc(index)} >
                    <div className={`hold ${selectIndex === index ? "activeIndex" : ""}`}>{item.icon}
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