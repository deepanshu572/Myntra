import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card_box'>
       <div className="card_img_sec">
        <img src={data.img} alt="" />
       </div>
       <div className="card_bottom_content">
           <h3>{data.name}</h3>
        <span>   <span>{data.discount}</span> off</span>
           <p>Shop Now</p>

           
       </div>
    </div>
  )
}

export default Card