import React from 'react'

const NavCatSec = () => {
    const navData = [
        {
            name: "Men"
        },
        {
            name: "Women"
        },
        {
            name: "Kids"
        },
        {
            name: "Home"
        },
        {
            name: "Beauty"
        },
        {
            name: "Genz"
        },
        {
            name: "Studio"
        },
    ]
  return (
    <div className='cat_nav'>
    {
        navData.map((item , index)=>{
            return(
            <button key={index}>{item.name}</button>                
            )
        })
    }
     
    </div>
  )
}

export default NavCatSec