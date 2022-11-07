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

  return (
    <div className={scss.App}>
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
