import css from 'components/Button/Button.module.scss';
const Button = ({ buttonType, text }) => {
  return (
    <button type={buttonType} className={css.button}>
      {text}
    </button>
  );
};

export default Button;
