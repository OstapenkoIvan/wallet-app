import React, { useState, createContext, useContext, useRef } from 'react';

import { useTableContext } from '../TableContext';
import { typesArr } from '../Constants';
export const RowContextProvider = createContext();
export const useRowContext = () => useContext(RowContextProvider);

const RowContext = ({ children, rowInfo, }) => {
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const tableContext = useTableContext();
  const { s, afterShown, afterHidden, rowOpenControl } = tableContext;
  const currentTargetRef = useRef();
  let rowData = {
    ...rowInfo,
    categoryInfo: tableContext.categoriesList.find(
      item => item.id === rowInfo?.categoryId
    ),
  };
  // console.log(rowData);
  function valueToString(element) {
    if (typeof rowData.amount === 'number') {
      return element.toString().replaceAll('-', ' ').trim();
    }
    return element.replaceAll('-', ' ').trim();
  }

  function handleRowBottomFormOpen(ev) {
    const { currentTarget } = ev;
    if (rowOpenControl === true) {
      setIsBottomOpen(true);
      afterShown();
      currentTarget.classList.add(s.isRowOpen);
      currentTargetRef.current = currentTarget;
      return;
    }
  }

  function handleRowBottomFormClose(ev) {
    currentTargetRef.current.classList.remove(s.isRowOpen);
    setIsBottomOpen(false);
    afterHidden();
  }

  return (
    <RowContextProvider.Provider
      value={{
        isBottomOpen,
        handleRowBottomFormOpen,
        handleRowBottomFormClose,
        rowData,
        tableContext,
        valueToString,
        typesArr
      }}
    >
      {children}
    </RowContextProvider.Provider>
  );
};

export default RowContext;
