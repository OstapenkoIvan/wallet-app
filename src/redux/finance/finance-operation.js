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

export const getTransactionsThunk = createAsyncThunk(
  'finance/allTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userApi.get('transactions');
      return data;
    } catch (error) {
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await userApi.post('transactions', transaction);
      return data;
    } catch (error) {
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'finance/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await userApi.delete(`transactions/${id}`);
      return id;
    } catch (error) {
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'finance/editTransaction',
  async ({ id, transaction }, { rejectWithValue }) => {
    try {
      const { data } = await userApi.patch(`transactions/${id}`, transaction);
      return data;
    } catch (error) {
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
    }
  }
);

export const getSummaryThunk = createAsyncThunk(
  'finance/getSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await userApi.get(
        `transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  'finance/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userApi.get('transaction-categories');
      return data;
    } catch (error) {
      return toast(rejectWithValue(error.message), {
        toastOpions,
      });
    }
  }
);
