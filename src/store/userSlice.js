import { createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
  name: 'counter',
  initialState:null,
  reducers: {
    addUser:(state, action) =>{
      return action.payload
    },
    removeUser:(state,action) =>{
      return null
    },
    userFeed:(state,action) =>{
      return action.payload
    },
    removeUserFeed:(state,action) =>{
      return null
    }
  },
})

export const { addUser, removeUser, userFeed, removeUserFeed } = userSlice.actions
export default userSlice.reducer