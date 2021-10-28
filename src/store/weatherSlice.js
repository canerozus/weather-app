import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
require('dotenv').config()

export const getWeather = createAsyncThunk(
    'getWeather',
    async (payload = 'bandirma', { rejectWithValue }) => {
        try {
            const data = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=9dda9ac755644b2ebfe193312212710&q=${payload}&days=5&aqi=no&alerts=no`)
            
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error
            }
            return rejectWithValue(error?.response?.data)
        }
    }
)
const weatherSlice = createSlice({
    name: 'weather',
    initialState: { loading: false},
    extraReducers: (builder) => {
        builder.addCase(getWeather.pending, (state, action) => { state.loading = true; });
        builder.addCase(getWeather.fulfilled, (state, action) => { state.loading = false; state.weather = action.payload; state.error = undefined; });
        builder.addCase(getWeather.rejected, (state, action) => { state.loading = false; state.weather = undefined; state.error = action.payload; });
    }
})

export default weatherSlice.reducer;