import React from 'react'
import { Link } from 'react-router'
import logo from '../../assets/img/logo.webp'
import secure from '../../assets/img/secure.webp'


const CheckoutNav = () => {
  return (
    <div className='navbar nav_cart'>
           <div className="nav_item">
             <Link to={"/"} >
       <img src={logo} alt="" />
       </Link>
       </div>
       <div className="nav_item_middle ">
        <div className="nav_item_item Cartactive">BAG</div>
        --------
        <div className="nav_item_item">ADDRESS</div>
        ------------
        <div className="nav_item_item">PAYMENT</div>
       </div>
       <div className="nav_item_right">
        <img src={secure} alt="" />
        <p>100% secure</p>
       </div>
       
   
       </div>
  )
}

export default CheckoutNav