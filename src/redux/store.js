import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import taskReducer from './slices/tasks/taskSlice'
import weatherReducer from './slices/weather/weatherSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    weather: weatherReducer,
  }
});

export default store;
