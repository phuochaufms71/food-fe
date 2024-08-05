import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getFoods = createAsyncThunk('foods/getFoods', async (accessToken) => {
    try {
        const { data } = await createApi(accessToken).get('/foods');
        notification[NOTIFICATION_TYPES.success]({
            message: "Get foods successfully"
        })
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const getFoodDetail = createAsyncThunk('foods/getFoodDetail', async ({accessToken, id}) => {
    try {
        const { data } = await createApi(accessToken).get(`/foods/${id}`)
        notification[NOTIFICATION_TYPES.success]({
            message: "Get food detail successfully"
        })
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const createFood = createAsyncThunk('foods/createFood', async ({accessToken, newFood}) => {
    try {
        await createApi(accessToken).post('/foods/admin-food/create', {...newFood})
        notification[NOTIFICATION_TYPES.success]({
            message: "Create new food successfully"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})
