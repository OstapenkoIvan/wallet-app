import React from 'react';
import { useRowContext } from '../TbaleRow/RowContext';
import { useTableContext } from '../TableContext';
import { TableStyles as s } from '../TableStyleSheet';

const Coll_Type = ({ title, colIdx }) => {
  const { titles, rowData, rowIdx } = useRowContext();
  const { tableName } = useTableContext();
  const transactionType = rowData.type === 'INCOME' ? '+' : '-';

  return <div className={s.col}>{transactionType}</div>;
};

export default Coll_Type;
