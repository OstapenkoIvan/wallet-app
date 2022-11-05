import React from 'react';
import { useRowContext } from '../TbaleRow/RowContext';
import { useTableContext } from '../TableContext';
import { TableStyles as s } from '../TableStyleSheet';


const Coll_Balance = ({ title, colIdx }) => {
  const { titles, rowData, rowIdx } = useRowContext();
  const { tableName } = useTableContext();

  return <div  className={s.col}>{rowData.balanceAfter}</div>;
};

export default Coll_Balance;
