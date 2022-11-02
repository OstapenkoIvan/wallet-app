import { createSlice } from '@reduxjs/toolkit';
import {
  allTransactions,
  getSummary,
  getCategories,
  addTransaction,
} from './finance-operation';
import { logOut, refresh } from 'redux/session/auth-operation';

import { toast } from 'react-toastify';

const initialState = {
  data: null,
  totalBalance: null,
  summary: null,
  error: null,
  categories: null,
  loading: false,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [allTransactions.pending]: state => {
      state.loading = true;
    },
    [allTransactions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    },
    [allTransactions.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      if (payload) {
        toast.error('Fatal error');
      }
    },
    [getSummary.pending]: state => {
      state.loading = true;
    },
    [getSummary.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.summary = payload;
      state.error = null;
    },
    [getSummary.rejected]: (state, { payload }) => {
      state.loading = false;
      console.log('getSummary', payload);
      state.error = payload;
      if (payload) {
        toast.error('Fatal error');
      }
    },

    [getCategories.pending]: state => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload.map(obj => {
        return obj.type === 'EXPENSE';
      });
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      if (payload) {
        toast.error('Fatal error');
      }
    },
    [addTransaction.pending]: state => {
      state.loading = true;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload) {
        toast.success('Add successfull');
      } else {
        toast.error('Try later');
      }
      state.data = [...state.data, payload];
      state.totalBalance = payload.balanceAfter;
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log('addTransaction', payload);
      if (payload === 'Request failed with status code 409') {
        toast.error('Error, try another one');
      } else {
        toast.error('Try later');
      }
    },
    [logOut.pending]: state => {
      state.loading = true;
    },
    [logOut.fulfilled]: state => {
      state.loading = false;
      state.data = null;
      state.totalBalance = null;
      state.summary = null;
      state.error = null;
      state.categories = null;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.loading = false;
      if (payload) {
        toast.error('You are not authorized');
      } else {
        toast.error('Try later');
      }
      state.error = payload;
    },

    [refresh.pending]: state => {
      state.loading = true;
    },
    [refresh.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;

      state.totalBalance = payload.balance;
    },
    [refresh.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
