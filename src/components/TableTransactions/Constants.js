export const rows = [
  { id: '1', name: 'aaaa', type: 'a', title: 'title1' },
  { id: '2', name: 'bbbb', type: 'b', title: 'title2' },
  { id: '3', name: 'cccc', type: 'c', title: 'title2' },
];
export const titles = [
  { id: '10', name: 'Date', type: '', action: 'adds' },
  { id: '1', name: 'Type', type: '', action: 'getFullYear' },
  { id: '2', name: 'Category', type: '', action: 'toLowerCase' },
  { id: '3', name: 'Comment', type: '', action: 'toRedColor' },
  { id: '4', name: 'Sum', type: '', action: 'getFullYear' },
  // { id: '5', name: 'Balance', type: '', action: 'getFullYear' },
];
export const tableTitles = [
  { id: '10', name: 'Date', type: '', action: 'date' },
  { id: '1', name: 'Type', type: '', action: 'type' },
  { id: '2', name: 'Category', type: '', action: 'category' },
  { id: '3', name: 'Comment', type: '', action: 'comment' },
  { id: '4', name: 'Sum', type: '', action: 'sum' },
  { id: '5', name: 'Balance', type: '', action: 'balance' },
];

export const testData = [
  {
    id: '813404c8-6fbc-49a8-a0f3-0bc4905c4211',
    transactionDate: '2022-11-01',
    type: 'INCOME',
    comment: 'My favorite apples from Ukraine, my favorite apples from Ukraine',
    amount: 100000,
    balanceAfter: 100000,
    categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
    userId: '25bd0249-20d5-42e0-8a23-55256739b6a3',
    open: false,
  },
  {
    id: '2a31e754-f816-4db4-b9e8-401adfa26afc',
    transactionDate: '2022-11-04',
    type: 'EXPENSE',
    comment: 'My favorite apples fromUkraine, myfavorite apples from Ukraine',
    amount: -100,
    balanceAfter: 99900,
    categoryId: '3acd0ecd-5295-4d54-8e7c-d3908f4d0402',
    userId: '25bd0249-20d5-42e0-8a23-55256739b6a3',
  },
  {
    id: '813404c8-6fbc-49a8-a0f3-0bc6005c4211',
    transactionDate: '2022-11-02',
    type: 'INCOME',
    comment: 'aplles',
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

export const categoryIdArr = [
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
export const typesArr = [
  {
    id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
    name: 'EXPENSE',
  },
  {
    id: 'c9d9e447-1b83-4238-8712-edc77b18b739',
    name: 'INCOME',
  },
];
