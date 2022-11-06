import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { useTableContext } from '../TableContext';

import { TableStyles as s } from '../TableStyleSheet';

const Coll_Category = ({ title, colIdx, calssName = '' }) => {
  const classNames = [s.col, ...calssName].join(' ');
  const { titles, rowData, rowIdx } = useRowContext();
  const { tableName, categoriesList } = useTableContext();

  const category = categoriesList.find(item => item.id === rowData?.categoryId);

  return (
    <div className={classNames}>
      <div className={s.commentWrap}>{category ? category?.name : 'empty'}</div>
    </div>
  );
};

export default Coll_Category;
