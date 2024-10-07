import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        SetUser: (state, action) => {
            state.user = action.payload.user;
        },
        // Optional: Add a logout reducer
        ClearUser: (state) => {
            state.user = null;
        },
    },
});

// Export actions
export const { SetUser, ClearUser } = AuthSlice.actions;

// Export the reducer
export default AuthSlice.reducer;
