import logo from '../images/header-logo.svg';

function Header({btnHeaderText}) {
  return (
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип шапки" />
        <button className="button button_type_header" type="submit">
              {btnHeaderText}
            </button>
      </header>)
}

export default Header;
