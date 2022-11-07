import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { TableStyles as s } from '../TableStyleSheet';

const Coll_Balance = ({ title, colIdx, calssName = '' }) => {
  const classNames = [s.col, ...calssName].join(' ');
  const {  rowData,  } = useRowContext();

  return <div className={classNames}>{rowData.balanceAfter}</div>;
};

export default Coll_Balance;
