import scss from './NotFoundPage.module.scss';
import { useDispatch } from 'react-redux';
import { register, logIn, logOut, refresh } from 'redux/session/auth-operation';
const NotFoundPage = props => {
  const dispatch = useDispatch();
  function handleFormReg(ev) {
  // ev.preventDefault();
  dispatch(
    register({
      username: 'tester',
      email: 'testovych@mail.com',
      password: 'testovych',
    })
  );
  console.log('натиснув кнопку реєстрації');
}
  return (
    <div className={scss.NotFoundPage}>
      <span>NotFoundPage</span>
  <button type='button' onClick={handleFormReg}>реєстрація</button>
    </div>
  );
};

export default NotFoundPage;
