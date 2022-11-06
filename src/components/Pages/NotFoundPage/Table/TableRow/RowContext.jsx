import React, { useState, createContext, useContext, useRef } from 'react';
import { useEffect } from 'react';
import { useTableContext } from '../TableContext';

export const RowContextProvider = createContext();
export const useRowContext = () => useContext(RowContextProvider);

const RowContext = ({ children, rowData, rowIdx, titles }) => {
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const tableContext = useTableContext();
  const { s, afterShown, afterHidden, rowOpenControl } = tableContext;

  const currentTargetRef = useRef();

  function handleRowBottomOpen(ev) {
    const { currentTarget } = ev;
    if (rowOpenControl === true) {
      setIsBottomOpen(true);
      afterShown();
      currentTarget.classList.add(s.isRowOpen);
      currentTargetRef.current = currentTarget;
      return;
    }
  }

  function handleRowBottomClose(ev) {
    currentTargetRef.current.classList.remove(s.isRowOpen);
    setIsBottomOpen(false);
    afterHidden();
  }

  return (
    <RowContextProvider.Provider
      value={{
        isBottomOpen,
        handleRowBottomOpen,
        handleRowBottomClose,
        titles,
        rowData,
        rowIdx,
        tableContext,
      }}
    >
      {children}
    </RowContextProvider.Provider>
  );
};

export default RowContext;
