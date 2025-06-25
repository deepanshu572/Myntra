import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistAccessData } from "../../store/reducers/WishlistReducer";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlistAccessData());
  }, []);
  const { wishlist } = useSelector((state) => state.WishlistReducer);
  return (
    <div className="wishlist_page mt_custom">
      {wishlist?.map((item, index) => {
        return <ProductCard key={index} data={item} />;
      })}
    </div>
  );
};

export default Wishlist;
