import React from 'react';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal/ModalPortal';
import css from './modal.module.css';

const Modal = ({ setIsOpenModal, isOpenModal, children }) => {
  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const handleToggleModalBackdrop = evt => {
    let { target, currentTarget } = evt;
    if (target === currentTarget) {
      handleToggleModal();
    }
  };
  const handleToggleModalByEsc = evt => {
    let { code } = evt;
    if (code === 'Escape') {
      handleToggleModal();
      window.removeEventListener('keydown', handleToggleModalByEsc);
    }
  };

  window.addEventListener('keydown', handleToggleModalByEsc);
  return (
    <ModalPortal>
      {isOpenModal ? (
        <div className={css.Backdrop} onClick={handleToggleModalBackdrop}>
          <div className={css.Modal}>
            {children}
            <button className={css.closeModal} onClick={handleToggleModal}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </ModalPortal>
  );
};

Modal.propTypes = {
  currentImgUrl: PropTypes.string,
  onToggleModalByBtn: PropTypes.func,
  onToggleModalByBackdrop: PropTypes.func,
  onCloseModalByEsc: PropTypes.func,
};

export default Modal;
