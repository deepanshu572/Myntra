import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    getWishlistAccessData: (state, action) => {
      const wishlist =JSON.parse(localStorage.getItem("AllPrd")) || [];
      state.wishlist =  wishlist.filter((item)=>{ return item.wishlist === true})
    },
  },
});

export const { getWishlistData, getWishlistAccessData } = wishlistSlice.actions;

export default wishlistSlice.reducer;
