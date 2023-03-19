import React from 'react';
import PopupWithForm from './PopupWithForm';
import useFormAndValidation from '../hooks/useFormAndValidation';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
    const { errors, isValid,handleChange,resetForm } = useFormAndValidation();
  const cardName = React.useRef();
  const cardLink = React.useRef();

  React.useEffect(() => {
    cardName.current.value = '';
    cardLink.current.value = '';
    resetForm()
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardName.current.value,
      link: cardLink.current.value,
    });
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Новое место"
      onSubmit={handleSubmit}
      name="add-card"
      isValid={isValid}
      btnText="Сохранить">
      <fieldset className="form__inner">
        <input
          className="form__input  form__input_text_name"
          name="cardName"
          type="text"
          id="input-name-card"
          aria-label="Наименование"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          ref={cardName}
          required
        />
        <span className="form__input-error input-name-card-error">{errors.cardName}</span>
        <input
          className="form__input form__input_text_about"
          name="cardLink"
          type="url"
          id="input-link"
          aria-label="подпись"
          placeholder="Ссылка на картинку"
          ref={cardLink}
          onChange={handleChange}
          required
        />
        <span className="form__input-error input-link-error">{errors.cardLink}</span>
      </fieldset>
    </PopupWithForm>
  );
};
export default AddPlacePopup;
