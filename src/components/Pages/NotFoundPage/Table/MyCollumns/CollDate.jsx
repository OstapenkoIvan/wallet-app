import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

const CollDate = ({ title, colIdx }) => {
  const { titles, rowData, rowIdx, tableContext } = useRowContext();
  const { s } = tableContext;

  const date = new Date();
  return <div className={s.col}>{date.getFullYear()}</div>;
};

export default CollDate;
