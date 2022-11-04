import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh } from './auth-operation';

const initialState = {
  isAuth: false,
  token: null,
  user: {
    username: '',
    email: '',
    id: '',
    balance: '',
  },
  error: null,
  isLoading: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload.data.user;
      state.token = payload.data.token;
      state.isAuth = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logIn.pending](state) {
      state.isLoading = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isAuth = true;
    },
    [logIn.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logOut.pending](state) {
      state.isLoading = true;
    },
    [logOut.fulfilled](state) {
      state.isLoading = false;
      state.user = { username: '', email: '', id: '', balance: '' };
      state.token = null;
      state.isAuth = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [refresh.pending](state) {
      state.isLoading = true;
    },
    [refresh.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload;
      state.isAuth = true;
    },
    [refresh.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const sessionReducer = sessionSlice.reducer;
