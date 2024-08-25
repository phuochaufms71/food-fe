import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartFoods: localStorage.getItem("cartFoods") ? JSON.parse(localStorage.getItem("cartFoods")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartFoods.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cartFoods[itemIndex].cartQuantity += 1;
            } else {
                const tempFood = { ...action.payload, cartQuantity: 1 };
                state.cartFoods.push(tempFood);
            }
            toast.success("Add food to cart")
            localStorage.setItem("cartFoods", JSON.stringify(state.cartFoods))
        },
        removeFoodFromCart: (state, action) => {
            const nextCartFoods = state.cartFoods.filter(cartItem => cartItem._id !== action.payload._id)

            state.cartFoods = nextCartFoods;
            toast.error("Food deleted")
            localStorage.setItem("cartFoods", JSON.stringify(state.cartFoods))
        },
        increaseCart: (state, action) => {
            const itemIndex = state.cartFoods.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cartFoods[itemIndex].cartQuantity += 1;
            } else {
                const tempFood = { ...action.payload, cartQuantity: 1 };
                state.cartFoods.push(tempFood);
            }
            localStorage.setItem("cartFoods", JSON.stringify(state.cartFoods))
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartFoods.findIndex(item => item._id === action.payload._id);

            if (state.cartFoods[itemIndex].cartQuantity > 1) {
                state.cartFoods[itemIndex].cartQuantity -= 1;

            } else if (state.cartFoods[itemIndex].cartQuantity === 1) {
                toast.error("Can't be decrease anymore")
            }
        },
        clearCartFoods: (state) => {
            state.cartFoods = [];
            localStorage.setItem("cartFoods", JSON.stringify(state.cartFoods))
        },
        getTotals: (state) => {
           let { total, quantity } = state.cartFoods.reduce((cartTotal, cartFood) => {
                const { price, cartQuantity } = cartFood;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
})

export const { addToCart, removeFoodFromCart, increaseCart, decreaseCart, clearCartFoods, getTotals } = cartSlice.actions;

export default cartSlice.reducer;