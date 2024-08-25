import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';

import authReducer from './auth/authSlice';
import foodReducer from './food/foodSlice';
import blogReducer from './blog/blogSlice';
import cartReducer from "./cart/cartSlice"
import addressReducer from "./checkout/checkoutSlice";
import messageReducer from "./message/messageSlice";
import storage from 'redux-persist/lib/storage';
import paymentReducer from './payment/paymentSlice';
import favouriteFoodReducer from './food/favouriteFoodSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    food: foodReducer,
    blog: blogReducer,
    cart: cartReducer,
    address: addressReducer,
    message: messageReducer,
    payment: paymentReducer,
    favourite: favouriteFoodReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat(thunk)
    }
})

export const persistor = persistStore(store);