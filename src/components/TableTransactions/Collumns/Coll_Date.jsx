import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

import s from './Coll.module.scss';

const Coll_Date = ({ title, colIdx }) => {
  const { rowData } = useRowContext();

  return <div className={s.col}>{rowData.transactionDate}</div>;
};

export default Coll_Date;
