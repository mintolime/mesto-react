import { Link } from "react-router-dom";
// console.log('link', Link)
function Entry({ title, btnText,linkText }) {
  return (
    <section className="login" aria-label={title}> 
      <div className="login__container">
        <h3 className="login__title">{title}</h3>
        <form name="form" className="form"> 
          <fieldset className="form__inner form__inner_login">
            <input
              className="form__input form__input_login"
              name="nameEmail"
              type="email"
              aria-label="Ваша почта"
              placeholder="Email"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="form__input-error input-name-card-error"></span>
            <input
              className="form__input form__input_login"
              name="linkPassword"
              type="password"
              aria-label="Ваш пароль"
              placeholder="Пароль"
              required
            />
            <span className="form__input-error input-link-error"></span>
          </fieldset>
          <button className="button button_type_entry" type="submit">
            {btnText}
          </button>
        </form>
      </div>
      <a href="./" className="login__auth-link">{linkText}</a>
     {/* <Link to="/" className="login__auth">
        Уже зарегистрированы? Войти
      </Link> */}
    </section>
  );
}
export default Entry;
