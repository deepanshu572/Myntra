import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistAccessData } from "../../store/reducers/WishlistReducer";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { setLoading } from "../../store/reducers/ProductReducer";
import Loader from "../../Components/Loader/Loader";
import sad from "../../assets/img/sad.gif";
import { Link } from "react-router";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlistAccessData());
    dispatch(setLoading(true));
    setInterval(() => {
      dispatch(setLoading(false));
    }, 800);
  }, []);
  const { wishlist } = useSelector((state) => state.WishlistReducer);
  const { loading } = useSelector((state) => state.ProductReducer);

  return (
    <div className="wishlist_page mt_custom">
      {loading ? (
        <Loader />
      ) : (
        
          wishlist.length > 0 ? (wishlist?.map((item, index) => {
          return <ProductCard key={index} data={item} />;
        })) :(
           <div class="nothing_in_box">
          <img src={sad} alt="Nothing found" />

          <h3>Nothing is in wishlist</h3>
          <Link to={"/"}>
            <button>Keep browsing</button>
          </Link>
        </div>
        ) 
        
        
      )}
    </div>
  );
};

export default Wishlist;
