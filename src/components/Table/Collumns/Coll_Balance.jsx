import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { useTableContext } from '../TableContext';
import { TableStyles as s } from '../TableStyleSheet';

const Coll_Balance = ({ title, colIdx, calssName = '' }) => {
  const classNames = [s.col, ...calssName].join(' ');
  const { titles, rowData, rowIdx } = useRowContext();
  const { tableName } = useTableContext();

  return <div className={classNames}>{rowData.balanceAfter}</div>;
};

export default Coll_Balance;
