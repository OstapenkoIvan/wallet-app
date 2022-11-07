import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import DeviceTypeInformer from './DeviceTypeControl/DeviceTypeInformer';
import { MobileRoute } from './DeviceTypeControl/DeviseTypeController';

import { useDispatch, useSelector } from 'react-redux';
import { authOperation } from 'redux/session';

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
  const { getAuthToken } = sessionSelectors;
  let location = useLocation();

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
  // dispatch(financeOperation.getTransactions());
  //!Get  getSummary
  // dispatch(financeOperation.getSummary({ month: 1, year: 2022 }));
  //!Get getCategories
  // dispatch(financeOperation.getCategories());
  //!GET addTransaction
  // dispatch(
  // financeOperation.addTransaction({
  //   transactionDate: '2022-11-01T16:59:40+0000',
  //   type: 'INCOME',
  //   comment: 'aplles',
  //   amount: 100000,
  //   categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
  // })
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
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<PublicRoute redirectTo='/dashboard/transactions' />}
          >
            <Route
              path="signin"
              element={
                <Suspense
                  fallback={<AppLoader isLoading={true} global={true} />}
                >
                  <AuthPage />
                </Suspense>
              }
            />
            <Route
              path="signup"
              element={
                <Suspense
                  fallback={<AppLoader isLoading={true} global={true} />}
                >
                  <AuthPage forRegister />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo={location.pathname || '/signin'} />
            }
          >
            <Route
              path="dashboard/*"
              element={
                <Suspense
                  fallback={<AppLoader isLoading={true} global={true} />}
                >
                  <DashboardPage />
                </Suspense>
              }
            >
              <Route
                path="transactions"
                element={
                  <Suspense
                    fallback={<AppLoader isLoading={true} global={true} />}
                  >
                    <TransactionsPage />
                  </Suspense>
                }
              />
              <Route path="statistics" element={<StatisticsPage />} />
              <Route
                path="exchangeMobile"
                element={<MobileRoute redirectTo="/dashboard/transactions" />}
              >
                <Route
                  index
                  element={
                    <Suspense
                      fallback={<AppLoader isLoading={true} global={true} />}
                    >
                      <ExchangeMobilePage />
                    </Suspense>
                  }
                />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
};
