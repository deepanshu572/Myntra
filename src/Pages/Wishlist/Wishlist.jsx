import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistAccessData } from "../../store/reducers/WishlistReducer";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlistAccessData());
  }, []);
  const [WishlistItem, setWishlistItem] = useState();
  const { wishlist } = useSelector((state) => state.WishlistReducer);

  useEffect(() => {
   const WishListFilter = wishlist.filter((item) => {
    return(
       item.wishlist === true
    )     
  });
  setWishlistItem(WishListFilter);
  }, [wishlist])
  
  console.log(WishlistItem);
  
 
  // console.log('====================================');
  return (
    <div className="wishlist_page mt_custom">
      {WishlistItem?.map((item, index) => {
        return <ProductCard key={index} data={item} />;
      })}
    </div>
  );
};

export default Wishlist;
