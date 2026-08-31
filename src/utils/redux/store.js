import { combineReducers } from "@reduxjs/toolkit";
// import User from '../redux/slices/User';
import User from './slices/User';
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
// import logger
import {logger} from 'redux-logger'

const rootReducer = combineReducers({
    user: User
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
