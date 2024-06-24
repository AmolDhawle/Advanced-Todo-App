// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper functions to load and save auth state from/to local storage
const loadAuthFromLocalStorage = () => {
  const auth = localStorage.getItem('auth');
  return auth ? JSON.parse(auth) : { isAuthenticated: false, user: null };
};

const saveAuthToLocalStorage = (auth) => {
  localStorage.setItem('auth', JSON.stringify(auth));
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: loadAuthFromLocalStorage(),
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      saveAuthToLocalStorage(state);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      saveAuthToLocalStorage(state);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
