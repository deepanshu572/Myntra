import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    getWishlistData: (state, action) => {
        state.wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    },
  },
});

export const { getWishlistData } = wishlistSlice.actions

export default wishlistSlice.reducer;
