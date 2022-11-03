import css from 'components/Button/Button.module.scss';
const Button = ({ buttonType, text, onClick = null }) => {
  return (
    <button type={buttonType} className={css.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
