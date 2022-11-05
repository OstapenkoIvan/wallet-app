import React from 'react';
import TableRow from './TbaleRow/TableRow';
import RowContext from './TbaleRow/RowContext';
import { useTableContext } from './TableContext';
import { titles, rows, testData } from './Constants';

import { TableStyles as s } from './TableStyleSheet';

const TableBody = ({ className, children }) => {
  const {tableData} = useTableContext();

  return (
    <div className={s.tBody}>
      {testData.map((row, idx) => {
        row.selected = false;
        return (
          <RowContext key={row.id} rowData={row} rowIdx={idx} titles={titles}>
            <TableRow />
          </RowContext>
        );
      })}
    </div>
  );
};

export default TableBody;
