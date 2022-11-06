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
    const { target, currentTarget } = ev;
    // console.log(rowData);
    if (rowOpenControl === true) {
      setIsBottomOpen(true);
      afterShown();
      currentTarget.classList.add(s.isRowOpen);
      currentTargetRef.current = currentTarget;
      return;
    }
    // if (rowOpenControl === false) {
    //   setIsBottomOpen(false);
    //   afterHidden();
    //   currentTargetRef.current.classList.remove(s.isRowOpen);
    // }
  }

  function handleRowBottomClose() {
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
