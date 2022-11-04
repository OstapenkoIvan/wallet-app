import { createAsyncThunk } from '@reduxjs/toolkit';
import { authOperation } from 'redux/session';

export const getTransactionsThunk = createAsyncThunk(
  'transactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authOperation.userApi.get('transactions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'add',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await authOperation.userApi.post(
        'transactions',
        transaction
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'delete',
  async (id, { rejectWithValue }) => {
    try {
      await authOperation.userApi.delete(`transactions/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'edit',
  async ({ id, transaction }, { rejectWithValue }) => {
    try {
      const data = await authOperation.userApi.patch(
        `transactions/${id}`,
        transaction
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSummaryThunk = createAsyncThunk(
  'getSummary',
  async ({ month = 1, year = 2021 }, { rejectWithValue }) => {
    try {
      const { data } = await authOperation.userApi.get(
        `transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  'getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authOperation.userApi.get(
        'transaction-categories'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
