import React, { useState, createContext, useContext } from 'react';
import { testData as tableData } from './Constants';
import { categoryIdArr as categoriesList } from './Constants';
import { tableTitles } from './Constants';
import { useSelector } from 'react-redux';
import { getTransactions } from 'redux/finance/finance-selectors';

import s from './Table.module.scss';

export const TableContextProvider = createContext();
export const useTableContext = () => useContext(TableContextProvider);

const TableContext = ({ children, titles }) => {
  const [rowOpenControl, setRowOpenControl] = useState(true);

  function afterShown() {
    setRowOpenControl(false);
  }
  function afterHidden() {
    setRowOpenControl(true);
  }

  return (
    <TableContextProvider.Provider
      value={{
        s,
        tableTitles,
        tableData: tableData,
        categoriesList,
        rowOpenControl,
        afterHidden,
        afterShown,
      }}
    >
      {children}
    </TableContextProvider.Provider>
  );
};

export default TableContext;
