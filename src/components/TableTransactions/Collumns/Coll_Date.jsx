import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

import s from './Coll.module.scss';

const Coll_Date = ({ title, colIdx }) => {
  const { rowData } = useRowContext();
  const getTransactionDate = elDate => {
    const date = new Date(elDate);
    const day = date.getDate().toString().padStart(2, 0);
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const year = date.getFullYear().toString().slice(2);
    return `${day}.${month}.${year} `;
  };
  return <div className={s.col}>{getTransactionDate(rowData.transactionDate)}</div>;
};

export default Coll_Date;
