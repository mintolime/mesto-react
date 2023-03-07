import React from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const cardName = React.useRef();
  const cardLink = React.useRef();

  React.useEffect(() => {
    cardName.current.value = '';
    cardLink.current.value = '';
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
      btnText="Сохранить">
      <fieldset className="form__inner">
        <input
          className="form__input  form__input_text_name"
          name="nameCard"
          type="text"
          id="input-name-card"
          aria-label="Наименование"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          ref={cardName}
          required
        />
        <span className="form__input-error input-name-card-error"></span>
        <input
          className="form__input form__input_text_about"
          name="linkCard"
          type="url"
          id="input-link"
          aria-label="подпись"
          placeholder="Ссылка на картинку"
          ref={cardLink}
          required
        />
        <span className="form__input-error input-link-error"></span>
      </fieldset>
    </PopupWithForm>
  );
};
export default AddPlacePopup;
