import { Link } from 'react-router-dom';
import css from 'components/ButtonLink/ButtonLink.module.scss';
const ButtonLink = ({ text, navigateTo }) => {

  return (
    <Link to={navigateTo} className={css.link}>
      {text}
    </Link>
  );
};
export default ButtonLink;

