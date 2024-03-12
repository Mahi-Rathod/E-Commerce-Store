import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data    : null,
    loading : false,
    error   : null
}

const PostProductSlice = createSlice({
    name:"postProduct",
    initialState,
    reducers :{
        postProductStart(state){
            state.loading = true;
            state.error = null;
        },
        postProductSuccess(state, action){
            state.loading = false;
            state.data = action.payload;
        },
        postProductFailure(state, action){
            state.loading = false;
            state.error   = action.payload;
        }
    }
});

export const {postProductStart, postProductSuccess, postProductFailure} = PostProductSlice.actions;
export default PostProductSlice.reducer;