import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Layout from './Layout/Layout';
import AppLoader from './AppLoader/AppLoader';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import ButtonAddTransactions from './ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from './ModalAddTransactions/ModalAddTransactions';
import DeviceTypeInformer from './DeviceTypeControl/DeviceTypeInformer';

import { useDispatch, useSelector } from 'react-redux';
import { authOperation } from 'redux/session';
import { financeOperation } from 'redux/finance';
import { sessionSlice } from 'redux/session';
import { sessionSelectors } from 'redux/session';

import Modal from './Modal/Modal';

import scss from './App.module.scss';

const AuthPage = lazy(() => import('./Pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const StatisticsPage = lazy(() =>
  import('./Pages/StatisticsPage/StatisticsPage')
);
const DashboardPage = lazy(() => import('./Pages/DashboardPage/DashboardPage'));
const ExchangeMobilePage = lazy(() =>
  import('./Pages/ExchangeMobilePage/ExchangeMobilePage')
);
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'));
//* isAuth(pin):true
//* token(pin):"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI2M2ZjOWJhZS0xNGNiLTQ5NjEtOGI2NC1hMTQwNDdlYWQxNmMiLCJpYXQiOjE2Njc1MTEzMjEsImV4cCI6MTAwMDAwMDE2Njc1MTEzMjB9.AaUpdtIojxF5bEyu4r1naPJwj37NlwYJgMnv89FGevI"
//* username(pin):"tester"
//* email(pin):"testerovych5@mail.com"
//* id(pin):"5c322c08-ac8e-4bfb-b99e-1aea479bcda5"
//* balance(pin):0
//* error(pin):null
//* isLoading(pin):false
export const App = () => {
  const { getAuthToken, getIsAuth, getIsLoading } = sessionSelectors;
  const isAuth = useSelector(getIsAuth);
  const isAuthLoading = useSelector(getIsLoading);
  const authToken = useSelector(getAuthToken);

  const dispatch = useDispatch();

  console.log(isAuthLoading);

  useEffect(() => {
    if (authToken) {
      dispatch(authOperation.refresh());
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
      <DeviceTypeInformer />
      <Layout>
        <Suspense fallback={<AppLoader isLoading={true} global={true} />}>
          <Routes>
            <Route path="/" element={<PublicRoute redirectTo="/" end />}>
              <Route path="signin" element={<AuthPage />} />
              <Route path="signup" element={<AuthPage forRegister />} />
            </Route>
            <Route path="/" element={<PrivateRoute redirectTo="/signin" end />}>
              <Route path="/" element={<DashboardPage />}>
                <Route index element={<HomePage />} />
                <Route path="statistics" element={<StatisticsPage />} />
                <Route path="exchangeMobile" element={<ExchangeMobilePage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
      // comment by Ivan
      {/* <ButtonAddTransactions onClick={toggleModal} />
      {isModalOpen && <ModalAddTransactions onClose={toggleModal} />} */}
      {/* <AppLoader isLoading={false} global={true} /> */}
    </div>
  );
};
