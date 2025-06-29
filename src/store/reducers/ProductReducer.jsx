import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  products: [],
  loading: true,
};

export const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    getProductData: (state, action) => {
      const updatedPrd = action.payload.map((item) => ({
        ...item,
        wishlist: false,
      }));

      localStorage.setItem("AllPrd", JSON.stringify(updatedPrd));
    },
    getWishlistData: (state, action) => {
      const data = action.payload.data;
      const existingWishlist = JSON.parse(localStorage.getItem("AllPrd")) || [];

      const updatedWishlist = existingWishlist.map((item) => {
        if (item.id === data.id) {
          return { ...item, wishlist: !item.wishlist };
        }
        return item;
      });

      localStorage.setItem("AllPrd", JSON.stringify(updatedWishlist));
      state.products = updatedWishlist;
    },
    getPrdData: (state, action) => {
      state.products = JSON.parse(localStorage.getItem("AllPrd"));
    },
  },
});

export const { setLoading, getProductData, getPrdData , getWishlistData } = ProductSlice.actions;

export default ProductSlice.reducer;
