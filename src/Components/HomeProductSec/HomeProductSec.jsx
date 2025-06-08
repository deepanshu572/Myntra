import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const HomeProductSec = () => {
    const productData= [
        {
            name: "Floral Printed Round Neck Thread Work Straight Cotton Kurta",
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
            brand :"suits and son's",
            price : "400",
            fPrice  :"700",
            disc : "50"
        },
        {
            name: "Floral Printed Round Neck Thread Work Straight Cotton Kurta",
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
            brand :"suits and son's",
            price : "400",
            fPrice  :"700",
            disc : "50"
        },
        {
            name: "Floral Printed Round Neck Thread Work Straight Cotton Kurta",
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
            brand :"suits and son's",
            price : "400",
            fPrice  :"700",
            disc : "50"
        },
        {
            name: "Floral Printed Round Neck Thread Work Straight Cotton Kurta",
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
            brand :"suits and son's",
            price : "400",
            fPrice  :"700",
            disc : "50"
        },
        {
            name: "Floral Printed Round Neck Thread Work Straight Cotton Kurta",
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
            brand :"suits and son's",
            price : "400",
            fPrice  :"700",
            disc : "50"
        },
        {
            name: "Floral Printed Round Neck Thread Work Straight Cotton Kurta",
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
            brand :"suits and son's",
            price : "400",
            fPrice  :"700",
            disc : "50"
        },
        {
            name: "Floral Printed Round Neck Thread Work Straight Cotton Kurta",
            img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
            brand :"suits and son's",
            price : "400",
            fPrice  :"700",
            disc : "50"
        }
    ];
  return (
    <div className='product_sec_home'>
        <h3>New Products</h3>
        <div className="product_wrapper">
        {
            productData.map((item , index)=>{
                return  <ProductCard key={index} data = {item} />
            })
        }
        </div>
          <div className="banner_img_bootom">
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/30/3f9002f7-ff28-40c5-ac33-047d1cb7c18f1748602201443-App-Install-Banner.jpg" alt="" />
      </div>
    </div>
    
  )
}

export default HomeProductSec