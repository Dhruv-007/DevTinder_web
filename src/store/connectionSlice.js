import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
    name:'connection',
    initialState:null,
    reducers:{
        connectionFeed:(state,action)=>{
           return action.payload;
        },
        removeConnectionFeed:(state,action) =>{
            return null;
        }
    }
})

export const {connectionFeed,removeConnectionFeed} = connectionSlice.actions;
export default connectionSlice.reducer;