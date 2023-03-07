import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Обновить аватар"
      name="avatar"
      btnText="Сохранить">
      <fieldset className="form__inner">
        <input
          className="form__input"
          name="linkAvatar"
          type="url"
          id="input-avatar"
          aria-label="подпись"
          required
        />
        <span className="form__input-error input-avatar-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
