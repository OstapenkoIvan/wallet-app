import React from 'react';
import scss from '../StatisticsTable.module.scss';

const RowStatComponent = ({ arr }) => {
  return arr.map((el, idx) => {
    const { name, type, total } = el;

    return type === 'EXPENSE' ? (
      <tr key={idx} className={scss.tbodyRow}>
        <td className={[scss.colName, scss[`col-${idx + 1}`]].join(' ')}>
          <div
            className={[scss.colored, scss[`colored-${idx + 1}`]].join(' ')}
          ></div>
          {name}
        </td>
        <td className={[scss.colData, scss[`col-${idx + 1}`]].join(' ')}>
          {total}
        </td>
      </tr>
    ) : null;
  });
};

export default RowStatComponent;
