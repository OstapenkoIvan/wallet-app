import React, { createContext, useContext } from 'react';
import TableContext from './TableContext';
import TableBody from './TableBody';
import { TableStyles as s } from './TableStyleSheet';

const Table = ({ children }) => {
  return (
    <TableContext>
      <div className={s.table}>
        {/* <TableHead/> */}
        <TableBody />
      </div>
    </TableContext>
  );
};

export default Table;
