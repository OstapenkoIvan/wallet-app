import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { TableStyles as s } from '../TableStyleSheet';

const Coll = ({ title, colIdx }) => {
  const { titles, rowData, rowIdx } = useRowContext();


  return <div className={s.col}>default</div>;
};

export default Coll;
