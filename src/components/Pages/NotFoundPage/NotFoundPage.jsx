import { useEffect } from 'react';
import Header from 'components/Header/Header';

import TableContext from './Table/TableContext';
import Table from './Table/Table';

import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsThunk,addTransactionThunk } from 'redux/finance/finance-operation';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionsThunk());

  }, [dispatch]);
  return (
    <>
      <Header />
      {/* <div className={s.NotFoundPage}>NotFoundPage</div> */}
      <TableContext>
        <Table tableData></Table>
      </TableContext>
    </>
  );
};

export default NotFoundPage;
