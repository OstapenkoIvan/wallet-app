const getTotalBalance = state => state.finance.totalBalance;
const getTransactionsData = state => state.finance.data;
const getCategories = state => state.finance.categories;
const getSummary = state => state.finance.summary;
const getError = state => state.finance.error;
const getLoading = state => state.finance.loading;

const financeSelectors = {
  getTotalBalance,
  getTransactionsData,
  getCategories,
  getSummary,
  getError,
  getLoading,
};

export default financeSelectors;
