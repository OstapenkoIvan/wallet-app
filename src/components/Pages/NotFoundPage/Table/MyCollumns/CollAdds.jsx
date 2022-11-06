import React from 'react';
import { useRowContext } from '../TableRow/RowContext';
import { TableStyles as s } from '../TableStyleSheet';

const CollAdds = ({ title, colIdx, text }) => {
  const { handleRowBodyToggle, titles, rowData, rowIdx, isBodyShow } =
    useRowContext();

  console.log(rowData, isBodyShow);
  return (
    <div className={s.col}>
      <button className={s.btnAdds} type="button" onClick={handleRowBodyToggle}>
        {isBodyShow ? '-' : '+'}
      </button>
    </div>
  );
};

export default CollAdds;
