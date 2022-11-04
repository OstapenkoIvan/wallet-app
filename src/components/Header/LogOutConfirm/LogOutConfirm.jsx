import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { sprite } from 'assets/images/sprite';

import { useDispatch } from 'react-redux';
import { authOperation } from 'redux/session';

import s from './LogOutConfirm.module.scss';

const LogOutConfirm = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  function onToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function onConfrimLogOut() {
    onToggleModal();
    dispatch(authOperation.logOutThunk());
    console.log('ACCEPTED LOG OT');
  }
  function onDeclineLogOut() {
    onToggleModal();
    console.log('DECLINED LOG OUT');
  }
  return (
    <>
      <button className={s.exitBtn} type="button" onClick={onToggleModal}>
        <svg className={s.svg}>
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
        <span className={s.exitText}>Exit</span>
      </button>
      {isModalOpen && (
        <Modal handleToggle={onToggleModal} isOpenModal={isModalOpen}>
          <div className={s.LogOutConfirm}>
            <p>You realy wanna to log out?</p>
            {/* <button type="button" onClick={onConfrimLogOut}>
              YES
            </button> */}
            <ButtonLink type="button" onClick={onConfrimLogOut}>
              YES
            </ButtonLink>
            {/* <button type="button" onClick={onDeclineLogOut}>
              NO
            </button> */}
            <Button type="button" onClick={onDeclineLogOut}>
              NO
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

// LogOutConfirm.propTypes = {};

export default LogOutConfirm;
