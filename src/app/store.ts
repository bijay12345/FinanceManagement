import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import ProductReducer from "../features/products/ProductSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: ProductReducer
    }
});

export { store }
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;