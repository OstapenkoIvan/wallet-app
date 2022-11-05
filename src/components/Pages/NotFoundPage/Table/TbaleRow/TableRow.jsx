import React, { useState, createContext, useContext, useEffect } from 'react';
import RowTop from './RowTop';
import RowBottom from './RowBottom';
import { TableStyles as s } from '../TableStyleSheet';
import { useRowContext } from './RowContext';

const TableRow = () => {
  const { isBottomOpen, tableContext, handleRowBottomOpen, rowIdx } =
    useRowContext();

  return (
    <div className={s.tRow} onDoubleClick={handleRowBottomOpen}>
      <RowTop />
      {/* <RowBottom /> */}
      {isBottomOpen && <RowBottom />}
    </div>
  );
};

export default TableRow;
