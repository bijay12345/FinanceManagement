import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
    sub: string;
    email: string;
}

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    user: User | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (
            state,
            action: PayloadAction<{
                accessToken?: string;
                refreshToken?: string;
                user?: User;
                isAuthenticated: boolean;
            }>
        ) => {
            state.accessToken = action.payload?.accessToken ? action.payload?.accessToken : null;
            state.refreshToken = action.payload?.refreshToken ? action.payload?.refreshToken : null;
            state.user = action.payload.user ?? null;
            state.isAuthenticated = action.payload.isAuthenticated;
            if (action.payload.refreshToken) {
                localStorage.setItem("refreshToken", action.payload.refreshToken);
            }
        },

        logout: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.user = null;
            state.isAuthenticated = false;
            localStorage.setItem("refreshToken", "");
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;