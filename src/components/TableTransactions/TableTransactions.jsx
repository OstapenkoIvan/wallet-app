import React from 'react';

import scss from './TableTransactions.module.scss';

const TableTransactions = () => {
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
      id: '813404c8-6fbc-49a8-a0f3-0bc4905c4211',
      transactionDate: '2022-11-01',
      type: 'INCOME',
      comment: 'aplles',
      amount: 100000,
      balanceAfter: 100000,
      categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
      userId: '25bd0249-20d5-42e0-8a23-55256739b6a3',
    },
    {
      id: '2a31e754-f816-4db4-b9e8-401adfa26afc',
      transactionDate: '2022-11-01',
      type: 'EXPENSE',
      comment: 'orange',
      amount: -100,
      balanceAfter: 99900,
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

  return (
    <div className={scss.container}>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((el, idx) => (
              <th
                key={idx}
                className={[scss.colHead, scss[`colHead${idx + 1}`]].join(' ')}
              >
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Data.map(item => {
            console.log(item);
            const findedCategObj = categoryIdArr.find(
              el => el.id === item.categoryId
            );
            console.log(findedCategObj);
            return (
              <tr key={item.id}>
                <th>{item.transactionDate.replaceAll('-', '.')}</th>
                <th>{item.type === 'INCOME' ? '+' : '-'}</th>
                <th>{findedCategObj.name}</th>
                <th>{item.comment}</th>
                <th>{item.amount}</th>
                <th>{item.balanceAfter}</th>
              </tr>
            );
          })}
        </tbody>

        {/* {Data.map((el)=><th></th>)} */}
      </table>
    </div>
  );
};

export default TableTransactions;

// <tbody>
//   {Data.map(item => (
//     <tr>
//       {tableDataKeys.map((el, idx) => (
//         <th
//           key={idx}
//           className={[scss.colHead, scss[`colHead${idx + 1}`]].join(' ')}
//         >
//           {item[el]}
//         </th>
//       ))}
//     </tr>
//   ))}
// </tbody>;
