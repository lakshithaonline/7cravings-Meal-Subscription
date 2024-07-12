import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import logger from 'redux-logger'
import userSlice from "./userSlice";
// import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    user: userSlice,
    middleware: [ logger]  //add thunk
  },
});

export default store;
