import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Configuration for redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

// Wrap the AuthSlice with persistReducer
const Reducer = persistReducer(persistConfig, AuthSlice);

// Configure the Redux store
export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    reducer: {
        Auth: Reducer,
    },
});

// Create a persistor for redux-persist
export const persistor = persistStore(store);
