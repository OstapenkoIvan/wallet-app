import React from 'react';
import RowTop from './RowTop';
import RowForm from '../RowForm/RowForm';
import TablePortal from '../TablePortal';
import { useRowContext } from './RowContext';

import s from './TableRow.module.scss'

const TableRow = () => {
  const { isBottomOpen, handleRowBottomFormOpen } = useRowContext();

  return (
    <div className={s.tRow} onDoubleClick={handleRowBottomFormOpen}>
      <RowTop />
      {isBottomOpen && (
        <TablePortal>
          <div className={s.rowModal}>
            <RowTop />
            <RowForm />
          </div>
        </TablePortal>
      )}
    </div>
  );
};

export default TableRow;
