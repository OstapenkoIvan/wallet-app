import css from 'components/ButtonLink/ButtonLink.module.scss';
const ButtonLink = ({ text, navigateTo }) => {
  return (
    <a href={navigateTo} className={css.link}>
      {text}
    </a>
  );
};
export default ButtonLink;
