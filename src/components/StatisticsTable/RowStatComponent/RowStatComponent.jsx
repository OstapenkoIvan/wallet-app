import React from 'react';
import PropTypes from 'prop-types';
import scss from '../StatisticsTable.module.scss';

const RowStatComponent = ({ labels, backgroundColor, data }) => {
  return labels.map((el, idx) => {
    return (
      <tr key={idx} className={scss.tbodyRow}>
        <td className={[scss.colName, scss[`col-${idx + 1}`]].join(' ')}>
          <div
            style={{ backgroundColor: backgroundColor[idx] }}
            className={[scss.colored, scss[`colored-${idx + 1}`]].join(' ')}
          ></div>
          <div className={scss.divData}>{el}</div>
        </td>
        <td className={[scss.colData, scss[`col-${idx + 1}`]].join(' ')}>
          {data[idx]}
        </td>
      </tr>
    );
  });
};
RowStatComponent.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  backgroundColor: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.number),
};
export default RowStatComponent;
