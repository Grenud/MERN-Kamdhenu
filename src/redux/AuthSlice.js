import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import axios from 'axios';

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

export const initializeAuth = () => async (dispatch) => {
    const token = Cookies.get('token');
  
    if (token) {
      try {
        const response = await axios.get('/api/auth/google-user-data', { withCredentials: true });
  
        if (response.data.success) {
          dispatch(SetUser(response.data.user));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

export const {SetUser} = AuthSlice.actions;
export default AuthSlice.reducer;