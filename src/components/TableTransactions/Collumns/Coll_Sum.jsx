import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

import s from './Coll.module.scss';

const Coll_Sum = ({ title, colIdx, className = '' }) => {
  const classNames = [s.col, s[title?.action], ...className].join(' ');
  const { rowData, valueToString } = useRowContext();
  const colorType = rowData.type === 'INCOME' ? ' #24cca7' : ' #ff6596';
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
