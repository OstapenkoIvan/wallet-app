import React from 'react';
import { useTableContext } from '../TableContext';
import { useRowContext } from './RowContext';

import { TableStyles as s } from '../TableStyleSheet';

const RowBottom = ({ className, children }) => {
  const { isBodyShow, handleRowBottomClose } = useRowContext();
  const { tableName, rowOpenControl, afterHidden } = useTableContext();

  

  let obj = {
    id: 'string',
    transactionDate: 'string',
    type: 'INCOME',
    categoryId: 'string',
    userId: 'string',
    comment: 'string',
    amount: 0,
    balanceAfter: 0,
  };

  function handleFormSubmit(ev) {
    console.log('submit');
    ev.preventDefault();
    handleRowBottomClose(ev);
  }
  return (
    <div className={s.rowBottom} onSubmit={handleFormSubmit}>
      <form className={s.rowBottomForm}>
        <div className={s.inputs}>
          <input type="text" />
          <input type="text" />
        </div>
        <button type="submit">Accept</button>
        <button onClick={handleRowBottomClose} type="button">
          Decline
        </button>
      </form>
    </div>
  );
};

export default RowBottom;
