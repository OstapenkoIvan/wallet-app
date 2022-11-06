import React from 'react';
import categoryIdArr from 'assets/categoryIdArr';
import RowComp from './RowComponent/RowComponent';
import scss from './TableMobile.module.scss';

const TableMobile = ({ data }) => {
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

  const categoryName = categId => {
    return categoryIdArr.find(el => el.id === categId);
  };

  const getTransactionDate = elDate => {
    const date = new Date(elDate);
    const day = date.getDate().toString().padStart(2, 0);
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const year = date.getFullYear().toString().slice(2);

    return `${day}.${month}.${year} `;
  };

  const filteredArr = data.map(el => {
    return {
      id: el.id,
      date: getTransactionDate(el.transactionDate),
      type: el.type === 'INCOME' ? '+' : '-',
      category: categoryName(el.categoryId).name,
      comment: el.comment,
      sum: el.type === 'INCOME' ? el.amount : el.amount.toString().slice(1),
      balance: el.balanceAfter,
    };
  });

  return (
    <div className={scss.container}>
      <ul className={scss.tablesList}>
        {filteredArr.map(rowObj => {
          return (
            <li className={scss.listItem} key={rowObj.id}>
              <table
                className={
                  rowObj.type === '+' ? scss.tableINCOME : scss.tableEXPENSE
                }
              >
                <tbody className={scss.tbody}>
                  {Object.keys(rowObj).map((item, idx) => {
                    return (
                      <RowComp key={idx} tdTitle={item} value={rowObj[item]} />
                    );
                  })}
                </tbody>
              </table>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableMobile;
