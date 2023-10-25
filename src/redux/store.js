import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/bookSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer,
  },
});
