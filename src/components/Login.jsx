import Entry from './EntryForm';
import useFormAndValidation from '../hooks/useFormAndValidation';
function Login() {
    const { values, handleChange, errors, isValid } = useFormAndValidation();
  // const { values } = useFormAndValidation();
  // function handleSubmit(evt) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   evt.preventDefault();
  //   onRegister(values);
  //   console.log('values', values);
  //   console.log('i work');
  // }
  return <Entry title="Вход" btnText="Войти" isValid={isValid}>
   <fieldset className="form__inner form__inner_login">
        <input
          className="form__input form__input_login"
          value={values.email || ''}
          onChange={handleChange}
          name="email"
          type="email"
          aria-label="Ваша почта"
          placeholder="Email"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__input-error">{errors.email}</span>
        <input
          className="form__input form__input_login"
          name="password"
          type="password"
          aria-label="Ваш пароль"
          placeholder="Пароль"
          value={values.password || ''}
          minLength="8"
          maxLength="30"
          onChange={handleChange}
          required
        />
        <span className="form__input-error"> {errors.password}</span>
      </fieldset>
  </Entry>;
}
export default Login;
