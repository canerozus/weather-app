import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
require('dotenv').config()

export const getWeather = createAsyncThunk(
    'getWeather',
    async (payload = 'bandirma', { rejectWithValue }) => {
        try {
            const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
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