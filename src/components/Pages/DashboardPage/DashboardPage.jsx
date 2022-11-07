import { Suspense, useEffect } from 'react';

import AppLoader from 'components/AppLoader/AppLoader';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { financeOperation, financeSelectors } from 'redux/finance';

import Header from 'components/Header/Header';
import AppBar from 'components/AppBar/AppBar';
import CreateTransaction from 'components/CreateTransaction/CreateTransaction';

import scss from './DashboardPage.module.scss';
const DashboardPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(financeSelectors.getCategories);

  useEffect(() => {
    dispatch(financeOperation.getTransactionsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) return;
    dispatch(financeOperation.getCategoriesThunk());
  }, [categories.length, dispatch]);

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
