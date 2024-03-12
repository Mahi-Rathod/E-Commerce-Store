import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice.js'
import PostProductReducer from "./PostProductSlice.js";
const Store = configureStore({
    reducer :{
        product :  productReducer,
        postProduct : PostProductReducer,
    },
})

export default Store;