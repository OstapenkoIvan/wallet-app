import React from 'react';

import { TableStyles as s } from '../TableStyleSheet';

const Coll_Title = ({ title, colIdx, calssName = '' }) => {
  const classNames = [s.col, ...calssName].join(' ');

  return <div className={classNames}>{title?.name}</div>;
};

export default Coll_Title;
