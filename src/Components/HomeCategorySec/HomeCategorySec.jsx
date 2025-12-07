import React, { useEffect } from "react";
import categoryHead from "../../assets/img/category.webp";
import Card from "../Card/Card";
import { getAsyncCategoryData } from "../../store/action/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
const HomeCategorySec = () => {
  const { category } = useSelector((state) => state.CategoryReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncCategoryData());
  }, []);

  const filterData =  category.filter((item)=> {
           return item.parent_id == 0;
          });


  return (
    <div className="category_home">
        <div className="top_head">
      <h3>Our Category</h3>
      <p>Discover the essence of perfection in every product.</p>
      </div>
      <div className="category_div">
        {filterData.map((item, index) => {
          return <Card key={index} data={item} />;
        })}


       
      </div>
    </div>
  );
};

export default HomeCategorySec;
