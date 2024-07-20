import {configureStore} from "@reduxjs/toolkit"
import {persistStore , persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import dataReducer from '../slices/dataSlice.js'


const persistConfig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,dataReducer)

const store = configureStore({
    reducer:{
        data : persistedReducer,
    },

});

export const persistor = persistStore(store);
export default store;