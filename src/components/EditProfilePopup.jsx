import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onSubmit, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  //  const [value, setValue] = React.useState('');
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    // console.log(currentUser)
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    setDescription(e.target.value);
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      btnText="Сохранить">
      <fieldset className="form__inner">
        <input
          onChange={handleSubmit}
          className="form__input  form__input_text_name "
          name="nameUser"
          value={name}
          type="text"
          id="input-name"
          aria-label="имя"
          placeholder="Ваше имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error input-name-error"></span>
        <input
          onChange={handleSubmit}
          className="form__input form__input_text_about"
          name="aboutUser"
          value={description}
          type="text"
          id="input-about"
          aria-label="подпись"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error input-about-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
