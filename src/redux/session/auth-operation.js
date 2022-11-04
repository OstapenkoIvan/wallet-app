import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'constans/constans';
import axios from 'axios';

export const userApi = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(token) {
    userApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    userApi.defaults.headers.common['Authorization'] = '';
  },
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const data = await userApi.post('auth/sign-up', user);
      if (data.token) token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.status);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await userApi.post('auth/sign-in', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userApi.delete('auth/sign-out');
      token.unset(data.token);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const {
      session: { token: persistedToken },
    } = getState();

    if (persistedToken === null) return rejectWithValue();

    token.set(persistedToken);
    try {
      const { data } = await userApi.get('users/current');
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
