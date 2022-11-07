import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { useTableContext } from '../TableContext';
import { TableStyles as s } from '../TableStyleSheet';

const Coll_Type = ({ title, colIdx, calssName = '' }) => {
  const classNames = [s.col, ...calssName].join(' ');
  const { titles, rowData, rowIdx } = useRowContext();
  const { tableName } = useTableContext();
  const transactionType = rowData.type === 'INCOME' ? '+' : '-';

  return <div className={classNames}>{transactionType}</div>;
};

export default Coll_Type;
