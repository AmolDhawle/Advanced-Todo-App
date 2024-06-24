import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch weather data based on the given location.
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: location,
          appid: 'a26f92e3d41d35d567e5cef25db35f25',    // API key for OpenWeatherMap
          units: 'metric'   // Units of measurement (metric)
        }
      });
    return response.data;
  }
);

// Weather slice for managing weather data in the Redux store.
const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null, // Stores the weather data
    error: null,    // Stores any error messages
    status: 'idle'  // Represents the current status ('idle', 'loading', 'succeeded', 'failed')
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';   // Set status to loading when the fetchWeather thunk is pending
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';  // Set status to succeeded when the fetchWeather thunk is fulfilled
        state.data = action.payload;  
        state.error = null; 
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';    // Set status to failed when the fetchWeather thunk is rejected
        state.data = null;
        state.error = action.error.message;
      });
  }
});

export default weatherSlice.reducer;
