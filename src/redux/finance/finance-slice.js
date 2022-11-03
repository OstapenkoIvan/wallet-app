import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactions,
  getSummary,
  getCategories,
  addTransaction,
  deleteTransaction,
  editTransaction,
} from './finance-operation';

const initialState = {
  transactions: [],
  categories: [],
  summary: {},
  isLoading: null,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [getTransactions.pending]: state => {
      state.isLoading = true;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.transactions = payload;
      state.error = null;
    },
    [getTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addTransaction.pending]: state => {
      state.isLoading = true;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.transactions = [...state.transactions, payload];
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteTransaction.pending]: state => {
      state.isLoading = true;
    },
    [deleteTransaction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.transactions = state.transactions.filter(
        item => item.id !== payload
      );
    },
    [deleteTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [editTransaction.pending]: state => {
      state.isLoading = true;
    },
    [editTransaction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const removedItemArr = state.transactions.filter(
        item => item.id !== payload.id
      );
      state.transactions = [payload, ...removedItemArr];
    },
    [editTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getSummary.pending]: state => {
      state.isLoading = true;
    },
    [getSummary.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.summary = payload;
      state.error = null;
    },
    [getSummary.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [getCategories.pending]: state => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
      state.error = null;
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
