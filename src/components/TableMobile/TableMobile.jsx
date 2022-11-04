import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import RowComp from './RowComponent/RowComponent';
import scss from './TableMobile.module.scss';

const TableMobile = () => {
  // const Cat = [
  //   {
  //     id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
  //     name: 'Main expenses',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
  //     name: 'Products',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
  //     name: 'Car',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
  //     name: 'Self care',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
  //     name: 'Child care',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
  //     name: 'Household products',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
  //     name: 'Education',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
  //     name: 'Leisure',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: '719626f1-9d23-4e99-84f5-289024e437a8',
  //     name: 'Other expenses',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
  //     name: 'Entertainment',
  //     type: 'EXPENSE',
  //   },
  //   {
  //     id: '063f1132-ba5d-42b4-951d-44011ca46262',
  //     name: 'Income',
  //     type: 'INCOME',
  //   },
  // ];

  const Data = [
    {
      id: '823404c8-6fbc-49a8-a0f3-0bc4905c4211',
      transactionDate: '2022-11-01',
      type: 'INCOME',
      comment:
        'My favorite apples from Ukraine, my favorite apples from ukraine',
      amount: 100000,
      balanceAfter: 100000,
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      userId: '25bd0249-20d5-42e0-8a23-55256739b6a3',
    },
    {
      id: '2a41e754-f816-4db4-b9e8-401adfa26afc',
      transactionDate: '2022-11-04',
      type: 'EXPENSE',
      comment: 'orange',
      amount: -100,
      balanceAfter: 99900,
      categoryId: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
      userId: '25bd0249-20d5-42e0-8a23-55256739b6a3',
    },
    {
      id: '813404c8-6fbc-49a8-a0f3-0bc6005c4211',
      transactionDate: '2022-11-02',
      type: 'INCOME',
      comment: 'Aplles',
      amount: 1000,
      balanceAfter: 100900,
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      userId: '25bd0249-20d5-42e0-8a23-55256739b6a3',
    },
    {
      id: '2a31e754-f816-4db4-b9e8-401adfa35afc',
      transactionDate: '2022-05-02',
      type: 'EXPENSE',
      comment: 'orange',
      amount: -10000,
      balanceAfter: 90900,
      categoryId: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
      userId: '25bd0249-20d5-42e0-8a23-55256739b6a3',
    },
  ];

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

  const categoryIdArr = [
    {
      id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
      name: 'Main expenses',
      type: 'EXPENSE',
    },
    {
      id: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
      name: 'Products',
      type: 'EXPENSE',
    },
    {
      id: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
      name: 'Car',
      type: 'EXPENSE',
    },
    {
      id: 'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4',
      name: 'Self care',
      type: 'EXPENSE',
    },
    {
      id: '76cc875a-3b43-4eae-8fdb-f76633821a34',
      name: 'Child care',
      type: 'EXPENSE',
    },
    {
      id: '128673b5-2f9a-46ae-a428-ec48cf1effa1',
      name: 'Household products',
      type: 'EXPENSE',
    },
    {
      id: '1272fcc4-d59f-462d-ad33-a85a075e5581',
      name: 'Education',
      type: 'EXPENSE',
    },
    {
      id: 'c143130f-7d1e-4011-90a4-54766d4e308e',
      name: 'Leisure',
      type: 'EXPENSE',
    },
    {
      id: '719626f1-9d23-4e99-84f5-289024e437a8',
      name: 'Other expenses',
      type: 'EXPENSE',
    },
    {
      id: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
      name: 'Entertainment',
      type: 'EXPENSE',
    },
    {
      id: '063f1132-ba5d-42b4-951d-44011ca46262',
      name: 'Income',
      type: 'INCOME',
    },
  ];

  const categoryName = categId => {
    return categoryIdArr.find(el => el.id === categId);
  };

  const filteredArr = Data.map(el => {
    return {
      id: el.id,
      date: el.transactionDate.replaceAll('-', '.'),
      type: el.type === 'INCOME' ? '+' : '-',
      category: categoryName(el.categoryId).name,
      comment: el.comment,
      sum: el.type === 'INCOME' ? el.amount : el.amount.toString().slice(1),
      balance: el.balanceAfter,
    };
  });
  // console.log(filteredArr);

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
