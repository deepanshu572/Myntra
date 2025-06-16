import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    getWishlistData: (state, action) => {
      const data = action.payload.data;

      const existingWishlist =
        JSON.parse(localStorage.getItem("wishListItem")) || [];

      const exists = existingWishlist.find((item) => item.id === data.id);

      let updatedWishlist;

      if (exists) {
      updatedWishlist = existingWishlist.filter((item) => item.id !== data.id);
      } else {
        updatedWishlist = [...existingWishlist, { ...data, wishlist: true }];
        console.log("Added to wishlist:", data.id);
      }

      localStorage.setItem("wishListItem", JSON.stringify(updatedWishlist));
    },
    getWishlistAccessData: (state, action) => {
      state.wishlist = JSON.parse(localStorage.getItem("wishListItem")) || [];
    },
  },
});

export const { getWishlistData, getWishlistAccessData } = wishlistSlice.actions;

export default wishlistSlice.reducer;
