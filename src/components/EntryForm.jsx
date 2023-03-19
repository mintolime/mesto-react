import React from 'react';
import { Link } from 'react-router-dom';

// console.log('link', Link)
function Entry({ title, btnText, linkText,onSubmit }) {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: '',
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  return (
    <section className="login" aria-label={title}>
      <div className="login__container">
        <h3 className="login__title">{title}</h3>
        <form name="form" className="form" onSubmit={onSubmit}>
          <fieldset className="form__inner form__inner_login">
            <input
              className="form__input form__input_login"
              value={formValue.email}
              onChange={handleChange}
              name="email"
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
              name="password"
              type="password"
              aria-label="Ваш пароль"
              placeholder="Пароль"
              value={formValue.password}
              onChange={handleChange}
              required
            />
            <span className="form__input-error input-link-error"></span>
          </fieldset>
          <button className="button button_type_entry" type="submit">
            {btnText}
          </button>
        </form>
      </div>
      <Link to="/signin" className="login__auth-link">
        {linkText}
      </Link>
    </section>
  );
}
export default Entry;
