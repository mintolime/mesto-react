import logo from '../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header({ btnHeaderText }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип шапки" />
      <Link to="/signup" className="header__link-entry">
        {btnHeaderText}
      </Link>
    </header>
  );
}

export default Header;
