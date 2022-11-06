import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { TableStyles as s } from '../TableStyleSheet';

const CollRedColor = ({ title, idx }) => {
  const { titles, rowData, rowIdx } = useRowContext();
  return <div className={s.colRed}>{rowData?.name}</div>;
};

export default CollRedColor;
