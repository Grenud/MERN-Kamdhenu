import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null
}

const AuthSlice = createSlice({
    name:"Auth",
    initialState:initialState,
    reducers:{
        SetUser:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {SetUser} = AuthSlice.actions;
export default AuthSlice.reducer;