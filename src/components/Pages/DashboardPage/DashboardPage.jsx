import { Suspense, useEffect } from 'react';

import AppLoader from 'components/AppLoader/AppLoader';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { financeOperation } from 'redux/finance';
import { sessionSelectors } from 'redux/session';

import Header from 'components/Header/Header';
import AppBar from 'components/AppBar/AppBar';
import CreateTransaction from 'components/CreateTransaction/CreateTransaction';

import scss from './DashboardPage.module.scss';
const DashboardPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(sessionSelectors.getIsAuth);

  useEffect(() => {
    dispatch(financeOperation.getTransactionsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth) return;
    dispatch(financeOperation.getCategoriesThunk());
  }, [isAuth, dispatch]);

  return (
    <>
      <div className={scss.blur}>
        <Header />
        <div className="container">
          <div className={scss.gridPage}>
            <div className={scss.AppBarBox}>
              <AppBar />
            </div>
            <div className={scss.OutletBox}>
              <Suspense fallback={<AppLoader isLoading={true} global={true} />}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <CreateTransaction />
    </>
  );
};

DashboardPage.propTypes = {};

export default DashboardPage;
// AppBarBox
// OutletBox
