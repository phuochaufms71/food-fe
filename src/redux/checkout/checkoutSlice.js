import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getAddresses = createAsyncThunk('checkout/getAddresses', async (accessToken) => {
    try {
        const { data } = await createApi(accessToken).get("/checkout/lists");
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
});

export const createAddress = createAsyncThunk('checkout/createAddress', async ({accessToken, newAddress}) => {
    try {
        await createApi(accessToken).post('/checkout/create', {...newAddress})
        localStorage.setItem("addresses", JSON.stringify(newAddress))
        notification[NOTIFICATION_TYPES.success]({
            message: "Create address success"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const updateAddress = createAsyncThunk('checkout/updateAddress', async ({accessToken, id, updateAddress}) => {
    try {
        await createApi(accessToken).put(`/checkout/${id}`, {...updateAddress})
        localStorage.setItem("addresses", JSON.stringify(updateAddress))
        notification[NOTIFICATION_TYPES.success]({
            message: "Address is updated"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const deleteAddress = createAsyncThunk('checkout/deleteAddress', async ({accessToken, id}) => {
    try {
        await createApi(accessToken).delete(`/checkout/${id}`)
        notification[NOTIFICATION_TYPES.success]({
            message: "Delete address successfully"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    addresses: localStorage.getItem("addresses") ? JSON.parse(localStorage.getItem("addresses")) : [],
    address: {}
}

const addressSlice = createSlice({
    name: "address",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAddresses.fulfilled, (state, action) => {
            state.addresses = action.payload
        })
    }
})

export default addressSlice.reducer;