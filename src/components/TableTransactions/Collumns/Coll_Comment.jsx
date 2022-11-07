import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

import { TableStyles as s } from '../TableStyleSheet';

const Coll_Comment = ({ title, colIdx, calssName = '' }) => {
  const classNames = [s.col, ...calssName].join(' ');
  const { titles, rowData, rowIdx } = useRowContext();

  return (
    <div className={classNames}>
      <div className={s.commentWrap}>{rowData.comment}</div>
    </div>
  );
};

export default Coll_Comment;
