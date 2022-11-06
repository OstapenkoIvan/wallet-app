import React from 'react';
import RowStatComponent from './RowStatComponent/RowStatComponent';
import exempleDataStat from 'assets/exempleDataStat';

import scss from './StatisticsTable.module.scss';

const StatisticsTable = ({ statData }) => {
  const { labels, datasets } = statData;
  const { backgroundColor, data } = datasets[0];

  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        <table className={scss.table}>
          <thead className={scss.thead}>
            <tr className={scss.theadRow}>
              <th className={scss.thedTitl}>Category</th>
              <th className={scss.thedTitl}>Sum</th>
            </tr>
          </thead>
          <tbody className={scss.tbody}>
            <RowStatComponent
              labels={labels}
              backgroundColor={backgroundColor}
              data={data}
            ></RowStatComponent>
          </tbody>
        </table>
        <ul className={scss.tblList}>
          <li className={scss.tblItem}>
            <p className={scss.botomName}>Expenses:</p>
            <p className={[scss.botomSum, scss.botomExpense].join(' ')}>
              {/* expenseSummary витягти зі стейту */}
              {exempleDataStat.expenseSummary}
            </p>
          </li>
          <li className={scss.tblItem}>
            <p className={scss.botomName}>Income:</p>
            <p className={[scss.botomSum, scss.botomIncome].join(' ')}>
              {/* incomeSummary витягти зі стейту */}
              {exempleDataStat.incomeSummary}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StatisticsTable;
