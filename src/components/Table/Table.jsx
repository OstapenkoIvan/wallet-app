import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { TableStyles as s } from './TableStyleSheet';

const Table = ({ children }) => {
  return (
    <div className={s.table}>
      <TableHead/>
      <TableBody />
    </div>
  );
};

export default Table;
