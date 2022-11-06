import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

import { TableStyles as s } from '../TableStyleSheet';

const Coll_Date = ({ title, colIdx }) => {
  const { titles, rowData, rowIdx } = useRowContext();

  return <div className={s.col}>{rowData.transactionDate}</div>;
};

export default Coll_Date;
