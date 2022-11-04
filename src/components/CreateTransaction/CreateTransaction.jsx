import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions/ModalAddTransactions';

const CreateTransaction = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log('MODAL TRANSACTION');
  };
  return (
    <>
      <ButtonAddTransactions onClick={toggleModal} />
      {isModalOpen && <ModalAddTransactions onClose={toggleModal} />}
    </>
  );
};

CreateTransaction.propTypes = {};

export default CreateTransaction;
