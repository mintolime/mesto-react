import logo from '../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header({ isCorrectLogin }) {
  // const btnHeaderText = 'Регистрация'
  console.log('isCorrectLogin', isCorrectLogin);

  //переделать
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип шапки" />
      {!isCorrectLogin ? (
        <Link to="/signup" className="header__link-entry">
          Регистрация
        </Link>
      ) : (
        <Link to="/signin" className="header__link-entry">
          Выход
        </Link>
      )}
    </header>
  );
}

export default Header;
