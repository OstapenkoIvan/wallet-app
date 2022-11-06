import React from 'react';
import TableRow from './TableRow/TableRow';
import RowContext from './TableRow/RowContext';
import TablePortal from './TablePortal';
import { useTableContext } from './TableContext';
import { titles, rows, testData } from './Constants';

import { TableStyles as s } from './TableStyleSheet';

const TableBody = ({ className, children }) => {
  const { tableData } = useTableContext();

  return (
    <div className={s.tBody}>
      {tableData.map((row, idx) => {
        row.selected = false;
        return (
          <RowContext key={row.id} rowInfo={row} rowIdx={idx} titles={titles}>
            <TableRow />
          </RowContext>
        );
      })}
    </div>
  );
};

export default TableBody;
