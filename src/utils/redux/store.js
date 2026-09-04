import { combineReducers } from "@reduxjs/toolkit";
// import User from '../redux/slices/User';
import User from './slices/User';
import Categories from './slices/Categories';
import Donations from './slices/Donations';
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
// import logger
import {logger} from 'redux-logger'

const rootReducer = combineReducers({
    user: User,
    categories: Categories,
    donations: Donations,
})

const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version:1
} 

const persistedReducer = persistReducer(configuration,rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat(logger);
    }
});

export default store;
export const persistor = persistStore(store);
