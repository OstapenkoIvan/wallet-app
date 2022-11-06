import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { useTableContext } from '../TableContext';

import { TableStyles as s } from '../TableStyleSheet';

const Coll_Sum = ({ title, colIdx, calssName = '' }) => {
  const classNames = [s.col, ...calssName].join(' ');
  const { titles, rowData, rowIdx } = useRowContext();
  const { tableName } = useTableContext();
  const colorType = rowData.type === 'INCOME' ? 'green' : 'red';

  const toStringAmount = () => {
    if (typeof rowData.amount === 'number') {
      return rowData.amount.toString().replaceAll('-', ' ').trim();
    }
    return rowData.amount.replaceAll('-', ' ').trim();
  };
  let styles = {
    color: colorType,
  };

  return (
    <div style={styles} className={classNames}>
      {toStringAmount()}
    </div>
  );
};

export default Coll_Sum;
