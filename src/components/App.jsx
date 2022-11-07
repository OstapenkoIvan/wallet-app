import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
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
  const { getAuthToken, getIsAuth } = sessionSelectors;
  let location = useLocation();

  const authToken = useSelector(getAuthToken);

  const dispatch = useDispatch();
  const auth = useSelector(getIsAuth);

  useEffect(() => {
    // if (!auth) {
    //   return;
    // }
    if (authToken) {
      dispatch(authOperation.refreshThunk());
      return;
    }
  }, [dispatch, authToken, auth]);

  return (
    <div className={scss.App}>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<PublicRoute redirectTo="/dashboard/transactions" />}
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
              <PrivateRoute
                redirectTo={authToken ? location.pathname : '/signin'}
              />
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
