import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer"
import CartReducer from "./reducers/CartReducer"
import CategoryReducer from "./reducers/CategoryReducer"
export const store = configureStore({
  reducer: {
    ProductReducer: ProductReducer,
    CategoryReducer: CategoryReducer,
    CartReducer: CartReducer,
  },
});
