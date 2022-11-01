import { lazy, Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import DeviceTypeInformer from './DeviceTypeInformer/DeviceTypeInformer';

// import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';

import scss from './App.module.scss';

const SignInPage = lazy(() => import('./Pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./Pages/SignUpPage/SignUpPage'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const StatisticsPage = lazy(() =>
  import('./Pages/StatisticsPage/StatisticsPage')
);
const DashboardPage = lazy(() => import('./Pages/DashboardPage/DashboardPage'));
const ExchangeMobilePage = lazy(() =>
  import('./Pages/ExchangeMobilePage/ExchangeMobilePage')
);

export const App = () => {
  return (
    <div className={scss.App}>
      <DeviceTypeInformer />
      <Layout>
        <Suspense>
          <Routes>
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="/" element={<DashboardPage />}>
              <Route index path="home" element={<HomePage />} />
              <Route path="statistics" element={<StatisticsPage />} />
              <Route path="exchangeMobile" element={<ExchangeMobilePage />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
