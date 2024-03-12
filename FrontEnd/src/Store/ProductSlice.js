import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    status : 'idle',
    error  : null,
    data   : []
}

//Fetching Data
export const fetchData = createAsyncThunk('products/fetchData', async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/products/");
    const data =response.data;
    return data;
  });

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers :{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            state.error = null; 
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    }
})

export const { } = ProductSlice.actions;
export default ProductSlice.reducer;