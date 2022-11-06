import React, { useState } from 'react';
import { useTableContext } from '../TableContext';
import { useRowContext } from './RowContext';
import { useDispatch, useSelector } from 'react-redux';
import { addTransactionThunk } from 'redux/finance/finance-operation';

import { TableStyles as s } from '../TableStyleSheet';

const RowBottom = () => {
  const { isBodyShow, rowData, handleRowBottomClose } = useRowContext();
  const { tableName, rowOpenControl, afterHidden, categoriesList } =
    useTableContext();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    transactionDate: rowData.transactionDate,
    type: rowData.type,
    categoryId: rowData.categoryId,
    comment: rowData.comment,
    amount: rowData.amount,
  });


  function handleFormSubmit(ev) {
    console.log('submit');
    ev.preventDefault();
    handleRowBottomClose(ev);
    console.log(formData);
    // dispatch(addTransactionThunk(formData));
  }
  function handleChangeinput(ev) {
    const {
      target: { name, value },
    } = ev;

    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className={s.rowBottom} onSubmit={handleFormSubmit}>
      <form className={s.rowBottomForm}>
        <div className={s.inputs}>
          <label htmlFor="type">Type</label>
          <input className={s.input}
            onChange={handleChangeinput}
            type="text"
            name="type"
            id="type"
            value={formData.type}
            placeholder="type"
          />
          <label htmlFor="category">Category</label>
          <input className={s.input}
            onChange={handleChangeinput}
            type="text"
            name="category"
            id="category"
            value={rowData.categoryInfo?.name}
            placeholder="category"
          />
          <label htmlFor="transactionDate">Date</label>
          <input className={s.input}
            onChange={handleChangeinput}
            type="date"
            name="transactionDate"
            id="transactionDate"
            value={formData.transactionDate}
            placeholder="transactionDate"
          />
          <label htmlFor="amount">Amount</label>
          <input className={s.input}
            onChange={handleChangeinput}
            type="text"
            name="amount"
            id="amount"
            value={formData.amount}
            placeholder="amount"
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            className={s.textarea}
            onChange={handleChangeinput}
            name="comment"
            id="comment"
            value={formData.comment}
            placeholder="comment"
          ></textarea>
        </div>
        <div className={s.buttons}>
          <button className={[s.button, s.accept].join(' ')} type="submit">Accept</button>
          <button className={[s.button, s.cancel].join(' ')} onClick={handleRowBottomClose} type="button">
            Cancel
          </button>
          <button className={[s.button, s.delete].join(' ')} onClick={handleRowBottomClose} type="button">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default RowBottom;
