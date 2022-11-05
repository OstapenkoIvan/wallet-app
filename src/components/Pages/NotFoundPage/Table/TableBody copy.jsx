import React from 'react';
import Row from './TbaleRow/TableRow';
import RowContext from './TbaleRow/RowContext';
import { titles, rows } from './Constants';
import { useTableContext } from './TableContext';

import { TableStyles as s } from './TableStyleSheet';
const TableBody = ({ className, children }) => {
  const { tableData } = useTableContext();
console.log(tableData);
  return (
    <div className={s.tBody}>
      {rows.map((row, idx) => (
        <RowContext key={row.id} rowData={row} rowIdx={idx} titles={titles}>
          <Row />
        </RowContext>
      ))}
    </div>
  );
};

export default TableBody;
