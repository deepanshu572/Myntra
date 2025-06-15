import React from 'react'
import { Link } from 'react-router'
import { RiHeart2Fill } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";

const Profile = () => {
  return (
    <div
    className='profile_data mt_custom'
    >
        <div className="profile_first_sec">
            <div className="profile_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGw-sz_ynsO6fK1gee7Kz13-xZHInABzJrXw&s" alt="" />
        </div>
        <h4>Jhon Doe</h4>
        </div>
        <div className="profile_second_sec">
            <h3>Your Information</h3>
            <div className="profile_wrap">
            <Link to={"/Wishlist"}>
            <RiHeart2Fill/>  Wishlist</Link>
            <Link to={"/AllProduct/All?Cid=0"}>
            <TbCategory /> Category</Link>
            <Link to={""}>
            <FiBox/> Order</Link>
            <Link to={"/"}>
            <CiLogout /> Logout</Link>
            
            </div>
        </div>
    </div>
  )
}

export default Profile