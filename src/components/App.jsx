
import { useState } from 'react';
import Headertest from "./HeaderTest/HeaderTest";
import ButtonAddTransactions from "./ButtonAddTransactions/ButtonAddTransactions";
import ModalAddTransactions from "./ModalAddTransactions/ModalAddTransactions";
import Currency from 'components/Currency';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = toggle => {
      setIsModalOpen(toggle)
    }

  return (
    <>
      <Headertest />
      
      <ButtonAddTransactions onOpen={() => toggleModal(true)} />
      {isModalOpen &&
        <ModalAddTransactions onClose={toggleModal} />
      }
    </>
  );

};
