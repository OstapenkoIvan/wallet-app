import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppLoader from './AppLoader/AppLoader';

import { useDispatch, useSelector } from 'react-redux';
import { authOperation } from 'redux/session';
import { sessionSelectors } from 'redux/session';
import scss from './App.module.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

const PrivateRoute = lazy(() => import('./Routes/PrivateRoute'));
const PublicRoute = lazy(() => import('./Routes/PublicRoute'));
const MobileRoute = lazy(() =>
  import('./DeviceTypeControl/DeviseTypeController')
);
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

  return (
    <div className={scss.App}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<AppLoader isLoading={true} global={true} />}>
              <PublicRoute redirectTo="/dashboard/transactions" />
            </Suspense>
          }
        >
          <Route path="signin" element={<AuthPage />} />
          <Route path="signup" element={<AuthPage forRegister />} />
        </Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<AppLoader isLoading={true} global={true} />}>
              <PrivateRoute
                redirectTo={authToken ? location.pathname : '/signin'}
              />
            </Suspense>
          }
        >
          <Route path="dashboard/*" element={<DashboardPage />}>
            <Route path="transactions" element={<TransactionsPage />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route
              path="exchangeMobile"
              element={<MobileRoute redirectTo="/dashboard/transactions" />}
            >
              <Route index element={<ExchangeMobilePage />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
