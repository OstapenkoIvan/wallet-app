import categoryIdArr from 'assets/categoryIdArr';
import exempleDataTransactions from 'assets/exempleDataTransactions';
import React from 'react';

import scss from './TableTransactions.module.scss';

const TableTransactions = () => {
  const tableHeaders = [
    'Date',
    'Type',
    'Category',
    'Comment',
    'Sum',
    'Balance',
  ];

  const tableDataKeys = [
    'transactionDate',
    'type',
    'categoryId',
    'comment',
    'amount',
    'balanceAfter',
  ];

  const getTransactionDate = elDate => {
    const date = new Date(elDate);
    const day = date.getDate().toString().padStart(2, 0);
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const year = date.getFullYear().toString().slice(2);

    return `${day}.${month}.${year} `;
  };

  return (
    <div className={scss.container}>
      <table className={scss.table}>
        <thead className={scss.thead}>
          <tr c>
            {tableHeaders.map((el, idx) => (
              <th
                key={idx}
                className={[
                  scss.colHead,
                  scss[`col-${idx + 1}`],
                  scss[`colHead${idx + 1}`],
                ].join(' ')}
              >
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={scss.tbody}>
          {exempleDataTransactions.map(item => {
            const findedCategObj = categoryIdArr.find(
              el => el.id === item.categoryId
            );
            return (
              <tr className={scss.tbodyRow} key={item.id}>
                <td className={[scss.col, scss.td, scss['col-1']].join(' ')}>
                  {getTransactionDate(item.transactionDate)}
                </td>
                <td className={[scss.col, scss.td, scss['col-2']].join(' ')}>
                  {item.type === 'INCOME' ? '+' : '-'}
                </td>
                <td
                  className={[scss.col, scss.td, scss['col-3']].join(' ')}
                  title={findedCategObj.name}
                >
                  {findedCategObj.name}
                </td>
                <td
                  className={[scss.col, scss.td, scss['col-4']].join(' ')}
                  title={item.comment}
                >
                  <div className={scss.comentWrap}>{item.comment}</div>
                </td>
                {item.type === 'INCOME' ? (
                  <td
                    className={[
                      scss.col,
                      scss.td,
                      scss.income,
                      scss['col-5'],
                    ].join(' ')}
                  >
                    {item.amount}
                  </td>
                ) : (
                  <td
                    className={[
                      scss.col,
                      scss.td,
                      scss.expense,
                      scss['col-5'],
                    ].join(' ')}
                  >
                    {item.amount.toString().slice(1)}
                  </td>
                )}
                <td className={[scss.col, scss.td, scss['col-6']].join(' ')}>
                  {item.balanceAfter}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransactions;
