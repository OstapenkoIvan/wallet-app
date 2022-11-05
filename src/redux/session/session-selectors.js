export const getSessionInfo = state => state.session;
export const getIsAuth = state => state.session.isAuth;
export const getAuthToken = state => state.session.token;
export const getIsLoading = state => state.session.isLoading;
export const getUserInfo = state => state.session.user;
export const getUserName = state => state.session.user.username;
export const getUserBalance = state => state.session.user.balance;
