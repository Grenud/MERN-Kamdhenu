import { configureStore } from "@reduxjs/toolkit";
import AuthSlice, { initializeAuth } from "./AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const Reducer = persistReducer(persistConfig, AuthSlice)

export const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        Auth: Reducer
    }
})
store.dispatch(initializeAuth())
export const persistor = persistStore(store)
