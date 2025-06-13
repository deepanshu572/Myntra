import React from 'react'
import { Link } from 'react-router'

const Card = ({data}) => {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
    const imgLink = "https://pos.kalamitcompany.com/api/images/";

  return (
    <Link to={`AllProduct/${data.name}?Cid=${data.id}`} className='card_box'>
       <div className="card_img_sec">
        <img src={imgLink + data.images} alt="" />
       </div>
       <div className="card_bottom_content">
           <h3>{data.name}</h3>
        {/* <span>   <span>{data.discount}</span> off</span> */}
           <p>Shop Now</p>

           
       </div>
    </Link>
  )
}

export default Card