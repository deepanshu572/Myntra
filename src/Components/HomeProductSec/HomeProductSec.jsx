import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncProductData } from "../../store/action/ProductAction";
import { getPrdData } from "../../store/reducers/ProductReducer";

const HomeProductSec = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(getAsyncProductData());
  }, []);
  useEffect(() => {
    dispatch(getPrdData());
  }, []);
  return (
    <div className="product_sec_home">
      <h3>New Products</h3>
      <div className="product_wrapper">
        {products?.map((item, index) => {
          return <ProductCard key={index} data={item} />;
        })}
      </div>
      <div className="banner_img_bootom">
        <img
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/5/30/3f9002f7-ff28-40c5-ac33-047d1cb7c18f1748602201443-App-Install-Banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeProductSec;
