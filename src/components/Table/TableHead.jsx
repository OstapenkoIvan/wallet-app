import React from 'react';
import Row from './TableRow/TableRow';
import RowContext from './TableRow/RowContext';
import { titles, rows } from './Constants';
import { useTableContext } from './TableContext';

import { TableStyles as s } from './TableStyleSheet';
const TableHead = ({ className, children }) => {
  const { tableData, tabletitles } = useTableContext();

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

export default TableHead;
