import chartColorsArr from 'assets/chartColorsArr';
import React from 'react';

import scss from '../StatisticsTable.module.scss';

const RowStatComponent = ({ arr }) => {
  return arr.map((el, idx) => {
    const { name, type, total } = el;

    return type === 'EXPENSE' ? (
      <tr key={idx} className={scss.tbodyRow}>
        <td className={[scss.colName, scss[`col-${idx + 1}`]].join(' ')}>
          <div
            style={{ backgroundColor: chartColorsArr[idx] }}
            className={[scss.colored, scss[`colored-${idx + 1}`]].join(' ')}
          ></div>
          <div className={scss.divData}>{name}</div>
        </td>
        <td className={[scss.colData, scss[`col-${idx + 1}`]].join(' ')}>
          {total}
        </td>
      </tr>
    ) : null;
  });
};

export default RowStatComponent;

// backgroundColor={chartColorsArr[idx]}
