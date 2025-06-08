import React from 'react'
import categoryHead from '../../assets/img/category.webp'
import Card from '../Card/Card'
const HomeCategorySec = () => {

  const category = [
    {
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
      name : "Ethenic Wear",
      discount : "40% - 60%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/12/iSJz5Njt_c1194cf91f2345f0aa27b4c49e12e0e3.jpg",
      name : "Casual Wear",
      discount : "40% - 60%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/21/3BgQu2eW_5411914cee614914a32c76543087ecf5.jpg",
      name : "Men's ActiveWear",
      discount : "70% - 90%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23630360/2023/6/14/ebe5fcfa-d574-472d-a694-b6ad63a52e471686738092803WomenOnePieceSleevelessswimsuit1.jpg",
      name : "Women's ActiveWear",
      discount : "10% - 40%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30389309/2025/5/23/0c98040a-5fef-493d-8398-6b7e1adbf0e81747984048488-Carlton-London-Women-Dial--Stainless-Steel-Bracelet-Style-St-1.jpg",
      name : "Watches",
      discount : "60% - 90%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19889834/2024/2/22/81775d2a-3fc9-4112-95bf-277bb2816d051708591191873-THE-MAN-COMPANY--Men-Set-Of-2-Black-EDT-100ml-81917085911916-1.jpg",
      name : "Perfume",
      discount : "30% - 60%"
    },
     {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/21/3BgQu2eW_5411914cee614914a32c76543087ecf5.jpg",
      name : "Men's ActiveWear",
      discount : "70% - 90%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23630360/2023/6/14/ebe5fcfa-d574-472d-a694-b6ad63a52e471686738092803WomenOnePieceSleevelessswimsuit1.jpg",
      name : "Women's ActiveWear",
      discount : "10% - 40%"
    },
     {
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/32817851/2025/2/24/912fb18c-9e7b-4f62-854f-db38ce59e50a1740401100376-Anouk-Women-Floral-Printed-Regular-Pure-Cotton-Kurta-with-Tr-2.jpg",
      name : "Ethenic Wear",
      discount : "40% - 60%"
    },
     {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19889834/2024/2/22/81775d2a-3fc9-4112-95bf-277bb2816d051708591191873-THE-MAN-COMPANY--Men-Set-Of-2-Black-EDT-100ml-81917085911916-1.jpg",
      name : "Perfume",
      discount : "30% - 60%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/12/iSJz5Njt_c1194cf91f2345f0aa27b4c49e12e0e3.jpg",
      name : "Casual Wear",
      discount : "40% - 60%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/21/3BgQu2eW_5411914cee614914a32c76543087ecf5.jpg",
      name : "Men's ActiveWear",
      discount : "70% - 90%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23630360/2023/6/14/ebe5fcfa-d574-472d-a694-b6ad63a52e471686738092803WomenOnePieceSleevelessswimsuit1.jpg",
      name : "Women's ActiveWear",
      discount : "10% - 40%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/12/iSJz5Njt_c1194cf91f2345f0aa27b4c49e12e0e3.jpg",
      name : "Casual Wear",
      discount : "40% - 60%"
    },
    {
      img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30389309/2025/5/23/0c98040a-5fef-493d-8398-6b7e1adbf0e81747984048488-Carlton-London-Women-Dial--Stainless-Steel-Bracelet-Style-St-1.jpg",
      name : "Watches",
      discount : "60% - 90%"
    },
  ]

  return (
    <div className='category_home'>
      <div className="head_category_heading">
        <img src={categoryHead} alt="" />
      </div>
      <div className="category_div">
      {
        category.map((item , index)=>{
         return  <Card key={index} data={item}/>
        })
      }
      </div>

     
     
    </div>
  )
}

export default HomeCategorySec