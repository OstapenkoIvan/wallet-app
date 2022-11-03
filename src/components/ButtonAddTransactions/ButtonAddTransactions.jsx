import css from './ButtonAddTransactions.module.scss';
import sprite from '../../images/sprite.svg';

export default function ButtonAddTransactions({onOpen}) {
    return (
        <button className={css.button} onClick={onOpen}>
            <svg className={css.plus} width="20" height="20">
                <use id="plus" href={sprite + '#untitled'} />
            </svg>
        </button>
    )
}