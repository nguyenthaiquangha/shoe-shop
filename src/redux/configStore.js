import {  configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slide/listProducts";
import CateSlice from "./slide/listCategory";
import  userSlice  from "./slide/user";
import  cartSlice  from "./slide/cart";
import  commentSlice  from "./slide/comment";


export const store = configureStore({
    reducer: {
        ProductSlice: ProductSlice,
        CateSlice: CateSlice,
        userSlice: userSlice,
        cartSlice : cartSlice,
        commentSlice: commentSlice,
    },

}, )