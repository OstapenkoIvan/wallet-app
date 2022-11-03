import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const allTransactions = createAsyncThunk(
  'transactions',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await axios.get('/api/transactions');
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'add',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await axios.post('/api/transactions', transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSummary = createAsyncThunk(
  'getSummary',
  async ({ mounth, year } = '', { rejectWithValue }) => {
    try {
      const data = await axios.get(`transactions-summary${mounth}&${year}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get('transaction-categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
