import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import DeviceTypeInformer from './DeviceTypeControl/DeviceTypeInformer';

// import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';
import Modal from './Modal/Modal';

import scss from './App.module.scss';

// const SignInPage = lazy(() => import('./Pages/SignInPage/SignInPage'));
// const SignUpPage = lazy(() => import('./Pages/SignUpPage/SignUpPage'));
import AuthPage from './Pages/AuthPage/AuthPage';
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const StatisticsPage = lazy(() =>
  import('./Pages/StatisticsPage/StatisticsPage')
);
const DashboardPage = lazy(() => import('./Pages/DashboardPage/DashboardPage'));
const ExchangeMobilePage = lazy(() =>
  import('./Pages/ExchangeMobilePage/ExchangeMobilePage')
);
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));

// ? const [isOpenModal, setIsOpenModal] = useState(true);
// ? <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>НАПОВНЕННЯ МОДАЛКИ</Modal>

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  return (
    <div className={scss.App}>
      {/* <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        НАПОВНЕННЯ МОДАЛКИ
      </Modal> */}
      <DeviceTypeInformer />
      {/* <Layout> */}
      <Suspense fallback={'Loading app...'}>
        <Routes>
          <Route path="signin" element={<AuthPage />} />
          <Route path="signup" element={<AuthPage forRegister/>} />
          <Route path="/" element={<DashboardPage />}>
            <Route index element={<HomePage />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="exchangeMobile" element={<ExchangeMobilePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {/* </Layout> */}
    </div>
  );
};
