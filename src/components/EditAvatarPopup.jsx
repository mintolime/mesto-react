import React from 'react';
import PopupWithForm from './PopupWithForm';
import useFormAndValidation from '../hooks/useFormAndValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const { errors, isValid, handleChange, resetForm } = useFormAndValidation();
  const avatarLink = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
  }

  React.useEffect(() => {
    avatarLink.current.value = '';
    resetForm();
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      name="avatar"
      btnText="Сохранить">
      <fieldset className="form__inner">
        <input
          className="form__input"
          name="avatarLink"
          type="url"
          id="input-avatar"
          aria-label="подпись"
          placeholder="Сcылка на аватар"
          ref={avatarLink}
          onChange={handleChange}
          required
        />
        <span className="form__input-error input-avatar-error">{errors.avatarLink}</span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
