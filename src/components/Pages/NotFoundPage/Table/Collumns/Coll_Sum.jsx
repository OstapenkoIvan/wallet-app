import React from 'react';
import { useRowContext } from '../TbaleRow/RowContext';
import { useTableContext } from '../TableContext';

import { TableStyles as s } from '../TableStyleSheet';

const Coll_Sum = ({ title, colIdx }) => {
  const { titles, rowData, rowIdx } = useRowContext();
  const { tableName } = useTableContext();
  const colorType = rowData.type === 'INCOME' ? 'green' : 'red';

  let styles = {
    color: colorType,
  };

  return (
    <div style={styles} className={s.col}>
      {rowData.amount}
    </div>
  );
};

export default Coll_Sum;
