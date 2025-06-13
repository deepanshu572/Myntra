import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router'
import { getAsyncCategoryData } from '../../store/action/CategoryAction';

const NavCatSec = () => {
      const { category } = useSelector((state) => state.CategoryReducer);
    
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getAsyncCategoryData());
      }, []);


        let FilterMainCat = category.filter((e) => {
    return e.parent_id == 0;
  });

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
        FilterMainCat.map((item , index)=>{
            return(
                <Link to={`AllProduct/${item.name}?Cid=${item.id}`}>
            <button key={index}>{item.name}</button>   
            </Link>             
            )
        })
    }
     
    </div>
  )
}

export default NavCatSec