import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { TableStyles as s } from '../TableStyleSheet';

const CollUpperCase = ({ title, idx }) => {
  const { titles, rowData, rowIdx } = useRowContext();


  return <div className={s.col}>{rowData?.name.toUpperCase()}</div>;
};

export default CollUpperCase;
