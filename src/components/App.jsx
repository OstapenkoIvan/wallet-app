import { useState } from 'react';
import Headertest from './HeaderTest/HeaderTest';
import ButtonAddTransactions from './ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from './ModalAddTransactions/ModalAddTransactions';

//!STORE TEST CODE//
// import { authOperation } from 'redux/session';
// import { financeOperation } from 'redux/finance';
// import { useDispatch } from 'react-redux';
//!

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = toggle => {
    setIsModalOpen(toggle);
  };

  //!STORE TEST CODE ABOVE
  //*CREATE NEW USER {username: 'biba',email: 'biba@mail.com',password: '1234asdf',}
  //*RECIEVED TOKEN - token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIxYWJhMWFlMS01OTk0LTQ1NWItYTA3MS0zZjg4MzhiN2I4YjAiLCJpYXQiOjE2Njc0ODA2MzUsImV4cCI6MTAwMDAwMDE2Njc0ODA2MzZ9.zhnU9MklVoloEpd5vIqfO7zCJhOwVx7Xg1R6hNMrq1c"

  // const dispatch = useDispatch();
  // dispatch(
  //   authOperation.register({
  //     username: 'boba',
  //     email: 'boba@mail.com',
  //     password: '1234asdf',
  //   })
  // );
  //
  //!LogOut user
  //
  // dispatch(authOperation.logOut());
  //
  //!LogIn user
  // dispatch(
  //   authOperation.logIn({
  //     email: 'boba@mail.com',
  //     password: '1234asdf',
  //   })
  // );
  //!Refresh user
  // dispatch(authOperation.refresh());

  //!GET getTransactions
  // dispatch(financeOperation.getTransactions());
  //!Get  getSummary
  // dispatch(financeOperation.getSummary({ month: 1, year: 2022 }));
  //!Get getCategories
  // dispatch(financeOperation.getCategories());
  //!GET addTransaction
  // dispatch(
  // financeOperation.addTransaction({
  //   transactionDate: '2022-11-01T16:59:40+0000',
  //   type: 'INCOME',
  //   comment: 'aplles',
  //   amount: 100000,
  //   categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
  // })
  // );
  //!Get deleteTransaction
  // dispatch(financeOperation.deleteTransaction('d429dd9c-21be-4186-8974-56c192494640'));
  //!Get  editTransaction
  // dispatch(
  //   financeOperation.editTransaction({
  //     id: 'fb103d4e-d1f2-4cdd-96cf-3f051a7bee49',
  //     transaction: {
  //       transactionDate: '2022-11-01T16:59:40+0000',
  //       type: 'INCOME',
  //       comment: 'ORANGES',
  //       amount: 23000,
  //       categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
  //     },
  //   })
  // );
  //
  return (
    <>
      <Headertest />

      <ButtonAddTransactions onOpen={() => toggleModal(true)} />
      {isModalOpen && <ModalAddTransactions onClose={toggleModal} />}
    </>
  );
};
