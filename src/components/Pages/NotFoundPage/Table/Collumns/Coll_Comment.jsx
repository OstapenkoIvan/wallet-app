import React from 'react';
import { useRowContext } from '../TbaleRow/RowContext';

import { TableStyles as s } from '../TableStyleSheet';

const Coll_Comment = ({ title, colIdx }) => {
  const { titles, rowData, rowIdx } = useRowContext();

  return (
    <div className={s.col}>
      <div className={s.commentWrap}>{rowData.comment}</div>
    </div>
  );
};

export default Coll_Comment;
