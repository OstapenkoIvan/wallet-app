import { useState } from 'react';
import css from 'components/CustomSelect/CustomSelect.module.scss';
import { sprite } from 'assets/images';
import { MONTH } from 'constans/constans';
import { YEARS } from 'constans/constans';
import { useDispatch } from 'react-redux';
import { financeOperation } from 'redux/finance';
import { useEffect } from 'react';

const CustomSelect = () => {
  const [selectMonthActive, setSelectMonthActive] = useState(false);
  const [selectYearActive, setSelectYearActive] = useState(false);
  const [hiddenMonthValue, setHiddenMonthValue] = useState('Month');
  const [hiddenYearValue, setHiddenYearValue] = useState('Year');
  const dispatch = useDispatch();

  const toggleMonthClass = () => {
    setSelectMonthActive(!selectMonthActive);
  };
  const toggleYearClass = () => {
    setSelectYearActive(!selectYearActive);
  };

  const handleHiddenMonthValue = event => {
    const value = event.target.id;
    setHiddenMonthValue(value);
  };
  const handleHiddenYearValue = event => {
    const value = event.target.textContent;
    setHiddenYearValue(value);
  };

  useEffect(() => {
    if (hiddenMonthValue && hiddenYearValue)
      dispatch(
        financeOperation.getSummary({ hiddenMonthValue, hiddenYearValue })
      );
  }, [dispatch, hiddenMonthValue, hiddenYearValue]);

  return (
    <>
      <div className={css.selectWrapper}>
        <div
          onClick={toggleMonthClass}
          className={css.select}
          tabIndex="0"
          id="month"
        >
          <div
            className={
              hiddenMonthValue === 'Month'
                ? css.selectHeader
                : [css['selectHeader'], css['isChosen']].join(' ')
            }
          >
            {hiddenMonthValue}
          </div>

          <svg className={css.selectIcon} width="40" height="19">
            <use href={sprite + '#icon-select-arrow'}></use>
          </svg>

          <ul
            className={
              selectMonthActive
                ? [css['selectBody'], css['isActive']].join(' ')
                : css.selectBody
            }
          >
            {MONTH.map(month => (
              <li
                onClick={handleHiddenMonthValue}
                className={css.selectItem}
                tabIndex="0"
                id={month.monthName}
                key={month.monthNumber}
              >
                {month.monthName}
              </li>
            ))}
          </ul>

          <input
            className={css.hiddenInput}
            name="category"
            id="category"
            placeholder="Month"
            value={hiddenMonthValue}
            onChange={handleHiddenMonthValue}
            required
          />
        </div>
        <div
          onClick={toggleYearClass}
          className={css.select}
          tabIndex="0"
          id="year"
        >
          <div
            className={
              hiddenYearValue === 'Year'
                ? css.selectHeader
                : [css['selectHeader'], css['isChosen']].join(' ')
            }
          >
            {hiddenYearValue}
          </div>

          <svg className={css.selectIcon} width="40" height="19">
            <use href={sprite + '#icon-select-arrow'}></use>
          </svg>

          <ul
            className={
              selectYearActive
                ? [css['selectBody'], css['isActive']].join(' ')
                : css.selectBody
            }
          >
            {YEARS.map(year => (
              <li
                onClick={handleHiddenYearValue}
                className={css.selectItem}
                tabIndex="0"
                id={year}
                key={year}
              >
                {year}
              </li>
            ))}
          </ul>

          <input
            className={css.hiddenInput}
            name="category"
            id="category"
            placeholder="Year"
            value={hiddenYearValue}
            onChange={handleHiddenYearValue}
            required
          />
        </div>
      </div>
      jvhbljkfnvs;djknvmc;dskmv;ijvhbljkfnvs;djknvmc;dskmv;ijvhbljkfnvs;djknvmc;dskmv;ijvhbljkfnvs;djknvmc;dskmv;ijvhbljkfnvs;djknvmc;dskmv;ijvhbljkfnvs;djknvmc;dskmv;i
    </>
  );
};

export default CustomSelect;
