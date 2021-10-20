import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
const store = configureStore({
    reducer: weatherSlice,
})
export default store;