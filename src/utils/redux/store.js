import { combineReducers } from "@reduxjs/toolkit";
// import User from '../redux/slices/User';
import User from './slices/User';
import { configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    user: User
})

const store = configureStore({
    reducer: rootReducer
});

export default store;