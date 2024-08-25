import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import createApi from "../../api"
import { notification } from "antd"
import { NOTIFICATION_TYPES } from "../../constants";

export const getMessages = createAsyncThunk('message/getMessages', async (accessToken) => {
    try {
        const { data } = await createApi(accessToken).get('/message/lists');
        return data.data
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

export const createMessage = createAsyncThunk('message/createMessage', async ({accessToken, newMessage}) => {
    try {
        await createApi(accessToken).post('/message/create', {...newMessage})
        notification[NOTIFICATION_TYPES.success]({
            message: "Send message successfully"
        })
    } catch (error) {
        notification[NOTIFICATION_TYPES.error]({
            message: error.response.data.message
        })
    }
})

const initialState = {
    messages: []
}

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMessages.fulfilled, (state, action) => {
            state.messages = action.payload
        })
    }
})

// export const { removeSelectedMovie } = foodSlice.actions;

export default messageSlice.reducer;
