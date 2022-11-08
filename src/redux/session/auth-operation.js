import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from 'constans/constans';
import { toast } from 'react-toastify';
const toastOpions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

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
      const { data } = await userApi.post('auth/sign-up', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
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
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await userApi.delete('auth/sign-out');
      console.log('logout');
      token.unset();
    } catch (error) {
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
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
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
    }
  }
);
