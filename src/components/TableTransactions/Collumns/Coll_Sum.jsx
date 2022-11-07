import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { useTableContext } from '../TableContext';

import { TableStyles as s } from '../TableStyleSheet';

const Coll_Sum = ({ title, colIdx, calssName = '' }) => {
  const classNames = [s.col, ...calssName].join(' ');
  const { titles, rowData, rowIdx, valueToString } = useRowContext();
  const { tableName } = useTableContext();
  const colorType = rowData.type === 'INCOME' ? 'green' : 'red';

  let styles = {
    color: colorType,
  };

  return (
    <div style={styles} className={classNames}>
      {valueToString(rowData.amount)}
    </div>
  );
};

export default Coll_Sum;
