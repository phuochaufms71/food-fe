import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { NOTIFICATION_TYPES } from "../../constants";
import createApi from "../../api";

export const getFoodCategory = createAsyncThunk('foods/getFoodCategory', async ({accessToken, category}) => {
    try {
        const { data } = await createApi(accessToken).get('/foods', {category})
        return data.data
    } catch (error) {
        console.log("Loading data food...")
    }
})

export const getFoods = createAsyncThunk('foods/getFoods', async (accessToken) => {
    try {
        const { data } = await createApi(accessToken).get('/foods/admin-food/lists');
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const getFoodDetail = createAsyncThunk('foods/getFoodDetail', async ({accessToken, id}) => {
    try {
        const { data } = await createApi(accessToken).get(`/foods/shopping/${id}`)
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

export const updateFood = createAsyncThunk('foods/updateFood', async ({accessToken, id, updateData}) => {
    try {
        await createApi(accessToken).put(`/foods/admin-food/lists/${id}`, {...updateData})
        notification[NOTIFICATION_TYPES.success]({
            message: "Update food successfully"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const deleteFood = createAsyncThunk('foods/deleteFood', async ({accessToken, id}) => {
    try {
        await createApi(accessToken).delete(`/foods/admin-food/lists/${id}`)
        notification[NOTIFICATION_TYPES.success]({
            message: "Delete food successfully"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    foods: [],
    food: {}
}

const foodSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.food = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFoods.fulfilled, (state, action) => {
            state.foods = action.payload
        })

        builder.addCase(getFoodDetail.fulfilled, (state, action) => {
            state.food = action.payload
        })
    }
})

// export const { removeSelectedMovie } = foodSlice.actions;

export const { getFovouriteFood } = foodSlice.actions;
export const getFoodsFromStore = state => state.food.foods;

export default foodSlice.reducer;

