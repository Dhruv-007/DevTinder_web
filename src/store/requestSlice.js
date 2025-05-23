import { createSlice } from "@reduxjs/toolkit";


const requestSlice = createSlice({
    name:'request',
    initialState: null,
    reducers:{
        requestFeed:(state,action) =>{
            return action.payload;
        },
        removeRequestFeed:(state,action) =>{
        const newArray = state?.filter((item) => item._id !== action.payload);
        return newArray;
        }
    }
})

export const {requestFeed,removeRequestFeed} = requestSlice.actions;
export default requestSlice.reducer;
