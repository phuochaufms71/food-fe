import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import foodReducer from './food/foodSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer,
    food: foodReducer
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