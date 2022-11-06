import { useState } from 'react';
import css from 'components/DateSelect/DateSelect.module.scss';
import { sprite } from 'assets/images';
import { MONTH } from 'constans/constans';
import { YEARS } from 'constans/constans';
import { useDispatch } from 'react-redux';
import { financeOperation } from 'redux/finance';
import { useEffect } from 'react';

const DateSelect = () => {
  const [selectMonthActive, setSelectMonthActive] = useState(false);
  const [selectYearActive, setSelectYearActive] = useState(false);
  const [hiddenMonthValue, setHiddenMonthValue] = useState('');
  const [hiddenYearValue, setHiddenYearValue] = useState('');
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
    setHiddenYearValue(Number(value));
  };

  useEffect(() => {
    const selectedMonth = MONTH.filter(
      month => month.monthName === hiddenMonthValue
    )[0]?.monthNumber;

    if (hiddenMonthValue && hiddenYearValue) {
      dispatch(
        financeOperation.getSummaryThunk({
          month: selectedMonth,
          year: hiddenYearValue,
        })
      );
    }
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
            {hiddenMonthValue || 'Month'}
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
            {hiddenYearValue || 'Year'}
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
    </>
  );
};

export default DateSelect;
