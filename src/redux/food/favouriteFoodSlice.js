import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    favourites: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : []
};

const favouriteFoodSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        addFavouriteFood: (state, action) => {
            const itemIndex = state.favourites.findIndex(item => item._id === action.payload._id);
            if (itemIndex === 0) {
                state.favourites.push(action.payload);
            }
            toast.success("Add food favourite")
            localStorage.setItem("favourites", JSON.stringify(state.favourites))
        }
    }
})

export const { addFavouriteFood } = favouriteFoodSlice.actions;

export default favouriteFoodSlice.reducer;