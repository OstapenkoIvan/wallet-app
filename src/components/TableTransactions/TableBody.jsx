import React from 'react';
import TableRow from './TableRow/TableRow';
import RowContext from './TableRow/RowContext';
import { useSelector } from 'react-redux';
import { getTransactions } from 'redux/finance/finance-selectors';

import { TableStyles as s } from './TableStyleSheet';

const TableBody = () => {
  const tableData = useSelector(getTransactions);


  return (
    <div className={s.tBody}>
      {tableData.map((row) => {
        return (
          <RowContext key={row?.id} rowInfo={row}>
            <TableRow />
          </RowContext>
        );
      })}
    </div>
  );
};

export default TableBody;
