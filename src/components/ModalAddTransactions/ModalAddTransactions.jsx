import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import scss from './ModalAddTransactions.module.scss';
import sprite from '../../images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export default function ModalAddTransactions({ onClose }) {
    
    const [checked, setChecked] = useState(true);
    const [selectActive, setSelectActive] = useState(false);
    const [categoryId, setCategoryId] = useState('Select a category')
    const [comment, setComment] = useState('');
    const [amount, setAmount] = useState('')

    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
    })
    
    useEffect(() => {
        const handleCloseKey = event => {
            if (event.code === 'Escape') {
                onClose(false)
            }
        };

        window.addEventListener('keydown', handleCloseKey);

        return () => {
            window.removeEventListener('keydown', handleCloseKey);
        };
    }, [onClose])

    const handleBackDropClick = event => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    };

    const toggleClass = () => {
        setSelectActive(!selectActive);
    };

    const handleCategoryId = event => {
        const value = event.target.id
        setCategoryId(value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        const inputs = event.target;
        
        setCategoryId(categoryId);
        const transactionDate = inputs.elements.transactionDate.value;
        const type = inputs.elements.type.value;        
        setComment(comment);
        setAmount(amount);
        
        console.log({ transactionDate, type, categoryId, comment, amount })

        onClose()
    }

    return createPortal(
        <div className={scss.overlay} onClick={handleBackDropClick}>
            <div className={scss.modal} >

                {isDesktopOrLaptop &&
                    <button className={scss.closeButton} type='button' onClick={() => onClose(false)}>
                    <svg className={scss.closeIcon} width="20" height="20">
                        <use href={sprite + '#close'}></use>
                    </svg>
                    </button>
                }
                
                <h2 className={scss.modalTitle}>Add transactions</h2>

                <form className={scss.modalForm} onSubmit={handleSubmit}>

                    <div className={scss.checkboxContainer}>
                        <p className={checked !== true ? scss.textLeft : [scss["textLeft"], scss["isNotActive"] ].join(" ")}>Income</p>
                        <input onChange={() => setChecked(!checked)} id='checkbox' type="checkbox" name='type' value={checked === true ? 'EXPENSE' : 'INCOME'} checked={checked} className={scss.checkbox}/>
                        <label htmlFor="checkbox" className={scss.checkboxLabel}>
                            <span className={scss.checkboxSlider}>
                                <svg className={scss.plus} width="20" height="20">
                                    <use id="plus" href={sprite + '#untitled'} />
                                </svg>
                                <svg className={scss.minus} width="20" height="20">
                                    <use id="minus" href={sprite + '#minus'} />
                                </svg>
                            </span>
                        </label>
                        <p className={checked === true ? scss.textRight : [scss["textRight"], scss["isNotActive"] ].join(" ")}>Expense</p>
                    </div>

                    <div onClick={toggleClass}  className={scss.select} tabIndex="0" id="country">

                        <div className={categoryId === "Select a category" ? scss.selectHeader : [scss["selectHeader"], scss["isChosen"] ].join(" ")}>{categoryId}</div>

                        <svg className={scss.selectIcon} width="40" height="19">
                            <use href={sprite + '#icon-select-arrow'}></use>
                        </svg>

                        <ul className={selectActive ? [scss["selectBody"], scss["isActive"] ].join(" ") : scss.selectBody} >

                            {checked === true ? (
                                <>
                                    <li className={scss.selectItem} id='Main' onClick={handleCategoryId} tabIndex="0">Main</li>
                                    <li className={scss.selectItem} id="Food" onClick={handleCategoryId} tabIndex="0">Food</li>
                                    <li className={scss.selectItem} id="Auto" onClick={handleCategoryId} tabIndex="0">Auto</li>
                                    <li className={scss.selectItem} id="Development" onClick={handleCategoryId} tabIndex="0">Development</li>
                                    <li className={scss.selectItem} id="Children" onClick={handleCategoryId} tabIndex="0">Children</li>
                                    <li className={scss.selectItem} id="House" onClick={handleCategoryId} tabIndex="0">House</li>
                                    <li className={scss.selectItem} id="Education" onClick={handleCategoryId} tabIndex="0">Education</li>
                                    <li className={scss.selectItem} id="Reset" onClick={handleCategoryId} tabIndex="0">Reset</li>
                                </>) : (
                                    <>
                                        <li className={scss.selectItem} id="Regular Income" onClick={handleCategoryId} tabIndex="0">Regular Income</li>
                                        <li className={scss.selectItem} id="Iregular Income" onClick={handleCategoryId} tabIndex="0">Iregular Income</li>
                                </>)
                            }
                        </ul>

                        <input className={scss.hiddenInput} name="categoryId" id="category"
                            placeholder="Select a category" value={categoryId} onChange={handleCategoryId}  required/>

                    </div>

                    <div className={scss.inputsContainer}>
                        <input onChange={(event) => setAmount(Number(event.target.value))} type="text" name="amount" placeholder='0.00' className={scss.inputField} value={amount} required/>
                        <label className={scss.inputLabel}></label>

                        <label htmlFor="date" className={scss.dateLabel}>
                            <Datetime inputProps={{ className: scss.inputFieldDate, name: 'transactionDate' }} dateFormat="DD/MM/YYYY" timeFormat={false} closeOnSelect={true}  initialValue={new Date()} />
                            <svg className={scss.dateIcon} width="24" height="24">
                                <use href={sprite + '#calendar'}></use>
                            </svg>
                        </label>              

                    </div>
                    
                    <textarea onChange={(event) => setComment(event.target.value)} type="text" name="comment" placeholder='Comment' className={scss.inputFieldComment} value={comment}  required/>
                    <label className={scss.inputLabel}></label>
                    
                    <div className={scss.buttonsThumb}>
                        <button type="submit" className={scss.submitButton}>ADD</button>
                        <button type='button' className={scss.cancelButton} onClick={() => onClose(false)}>CANCEL</button>
                    </div>
                    
                </form>
            </div>
        </div>,
        modalRoot,
    )
}