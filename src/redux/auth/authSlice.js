import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { ACCESS_TOKEN, NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const register = createAsyncThunk('auth/register', async (dataRegister) => {
    try {
        const { data } = await createApi().post('/auth/register', { ...dataRegister });
        notification[NOTIFICATION_TYPES.success]({
            message: "Register account successfully"
        })
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const login = createAsyncThunk('auth/login', async (dataLogin) => {
    try {
        const { data } = await createApi().post('/auth/login', { ...dataLogin });
        localStorage.setItem(ACCESS_TOKEN, data.data.accessToken)
        notification[NOTIFICATION_TYPES.success]({
            message: "Login account succesfully"
        })
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const changePassword = createAsyncThunk('auth/change-password', async (dataChangePassword) => {
    try {
        const {data} = await createApi().post('/auth/change-password', {...dataChangePassword});
        notification[NOTIFICATION_TYPES.success]({
            message: "Change password account succesfully"
        })
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const resetPassword = createAsyncThunk('auth/reset-password', async (dataResetPassword) => {
    try {
        const {data} = await createApi().post('/auth/reset-password', {...dataResetPassword});
        notification[NOTIFICATION_TYPES.success]({
            message: "Reset password account succesfully"
        })
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const logout = createAsyncThunk('auth/logout', async (accessToken) => {
    try {
        await createApi(accessToken).post('/auth/logout');
        localStorage.removeItem("access_token")
        notification[NOTIFICATION_TYPES.success]({
            message: "Logout account succesfully"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    user: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.user = {}
        })
    }
})

export const getLoggedInUser = state => state.auth.user;

export default authSlice.reducer;

