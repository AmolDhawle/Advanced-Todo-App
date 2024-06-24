import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  weatherData: {} // Initialize weatherData as an empty object
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ location, taskId }) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: location,
          appid: 'a26f92e3d41d35d567e5cef25db35f25',
          units: 'metric'
        }
      });
      return { taskId, data: response.data };
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading'; // Set status to loading when the fetchWeather thunk is pending
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        const { taskId, data } = action.payload;
        state.weatherData[taskId] = {
          data, // weather data on success
          status: 'succeeded',  // Set status to succeeded when the fetchWeather thunk is fulfilled
          error: null
        };
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed'; // Set status to failed when the fetchWeather thunk is rejected
        state.data = null; // Clear weather data on failure
        state.error = action.error.message; // Store the error message
      });
  }
});

export default weatherSlice.reducer;
