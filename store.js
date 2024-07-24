import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './feature/Cart/cartSlice'

export const store = configureStore({
  reducer:{
    cart: CartReducer,
    
  }
})