import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shop/cartSlice";
import cartUiSlice from "./shop/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;