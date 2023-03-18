
import { useNavigate } from 'react-router-dom';
import Entry from './EntryForm';

function Register() {
  return (
    <Entry
      title="Регистрация"
      btnText="Зарегистрироваться"
      linkText="Уже зарегистрированы? Войти"
      // onSubmit={handleSubmit}
      ></Entry>
  );
}
export default Register;
