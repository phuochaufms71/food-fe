import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    favourites: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : [],
    favouriteQuantity: 0
};

const favouriteFoodSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addFavouriteFood: (state, action) => {
            const itemIndex = state.favourites.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.favourites[itemIndex].favouriteQuantity += 1;
                toast.info("Food are favourited")
            } else {
                const tempFavourite = { ...action.payload, favouriteQuantity: 1}
                state.favourites.push(tempFavourite);
                toast.success("Add food favourite")
            }
            localStorage.setItem("favourites", JSON.stringify(state.favourites))
        }
    }
})

export const { addFavouriteFood } = favouriteFoodSlice.actions;

export default favouriteFoodSlice.reducer;