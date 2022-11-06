import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { TableStyles as s } from '../TableStyleSheet';

const CollLowerCase = ({ title, idx }) => {
  const { titles, rowData, rowIdx } = useRowContext();

  return <div className={s.col}>{rowData?.name.toLowerCase()}</div>;
};

export default CollLowerCase;
