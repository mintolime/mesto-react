import React from 'react';
import PopupWithForm from './PopupWithForm';
import useFormAndValidation from '../hooks/useFormAndValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const { errors, isValid } = useFormAndValidation();
  const avatarLink = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
  }

  React.useEffect(() => {
    avatarLink.current.value = '';
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
          name="linkAvatar"
          type="url"
          id="input-avatar"
          aria-label="подпись"
          placeholder="Сcылка на аватар"
          ref={avatarLink}
          required
        />
        <span className="form__input-error input-avatar-error">{errors.avatar}</span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
