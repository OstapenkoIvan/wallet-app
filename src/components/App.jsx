import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import DeviceTypeInformer from './DeviceTypeControl/DeviceTypeInformer';
import { MobileRoute } from './DeviceTypeControl/DeviseTypeController';

import { useDispatch, useSelector } from 'react-redux';
import { authOperation } from 'redux/session';
import { financeOperation } from 'redux/finance';

import { sessionSelectors } from 'redux/session';

import scss from './App.module.scss';

const AuthPage = lazy(() => import('./Pages/AuthPage/AuthPage'));
const TransactionsPage = lazy(() =>
  import('./Pages/TransactionsPage/TransactionsPage')
);
const StatisticsPage = lazy(() =>
  import('./Pages/StatisticsPage/StatisticsPage')
);
const DashboardPage = lazy(() => import('./Pages/DashboardPage/DashboardPage'));
const ExchangeMobilePage = lazy(() =>
  import('./Pages/ExchangeMobilePage/ExchangeMobilePage')
);
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const { getAuthToken, getIsLoading } = sessionSelectors;

  // const isAuthLoading = useSelector(getIsLoading);
  const authToken = useSelector(getAuthToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (authToken) {
      dispatch(authOperation.refreshThunk());
      return;
    }
  }, [dispatch, authToken]);

  //!STORE TEST CODE ABOVE
  //*CREATE NEW USER {username: 'biba',email: 'biba@mail.com',password: '1234asdf',}
  //*RECIEVED TOKEN - token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIxYWJhMWFlMS01OTk0LTQ1NWItYTA3MS0zZjg4MzhiN2I4YjAiLCJpYXQiOjE2Njc0ODA2MzUsImV4cCI6MTAwMDAwMDE2Njc0ODA2MzZ9.zhnU9MklVoloEpd5vIqfO7zCJhOwVx7Xg1R6hNMrq1c"

  // const dispatch = useDispatch();
  // dispatch(
  //   authOperation.register({
  //     username: 'boba',
  //     email: 'boba@mail.com',
  //     password: '1234asdf',
  //   })
  // );
  //
  //!LogOut user
  //
  // dispatch(authOperation.logOut());
  //
  //!LogIn user
  // dispatch(
  //   authOperation.logIn({
  //     email: 'boba@mail.com',
  //     password: '1234asdf',
  //   })
  // );
  //!Refresh user
  // dispatch(authOperation.refresh());

  //!GET getTransactions
  // dispatch(financeOperation.getTransactionsThunk());
  //!Get  getSummary
  // dispatch(financeOperation.getSummaryThunk({ month: 1, year: 2022 }));
  //!Get getCategories
  // dispatch(financeOperation.getCategories());
  //!GET addTransaction
  // dispatch(
  //   financeOperation.addTransactionThunk({
  //     transactionDate: '2022-11-01T16:59:40+0000',
  //     type: 'INCOME',
  //     comment: 'oranges',
  //     amount: 300,
  //     categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
  //   })
  // );

  //!Get deleteTransaction
  // dispatch(financeOperation.deleteTransaction('d429dd9c-21be-4186-8974-56c192494640'));
  //!Get  editTransaction
  // dispatch(
  //   financeOperation.editTransaction({
  //     id: 'fb103d4e-d1f2-4cdd-96cf-3f051a7bee49',
  //     transaction: {
  //       transactionDate: '2022-11-01T16:59:40+0000',
  //       type: 'INCOME',
  //       comment: 'ORANGES',
  //       amount: 23000,
  //       categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
  //     },
  //   })
  // );
  //

  // import PrivateRoute from './Routes/PrivateRoute';
  // import PublicRoute from './Routes/PublicRoute';

  return (
    <div className={scss.App}>
      <DeviceTypeInformer />
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} global={true} />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute redirectTo="/dashboardPage/transactionsPage" end />
              }
            >
              <Route index element={<Navigate to="signin" />} />
              <Route path="signin" element={<AuthPage />} />
              <Route path="signup" element={<AuthPage forRegister />} />
            </Route>
            <Route path="/" element={<PrivateRoute redirectTo="/signin" />}>
              <Route path="dashboardPage/*" element={<DashboardPage />}>
                <Route path="transactionsPage" element={<TransactionsPage />} />
                <Route path="statistics" element={<StatisticsPage />} />
                <Route
                  path="exchangeMobile"
                  element={
                    <MobileRoute redirectTo="/dashboardPage/transactionsPage" />
                  }
                >
                  <Route index element={<ExchangeMobilePage />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
