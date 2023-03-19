import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteConfirmPopup({ card, isOpen, onClose, onDelete }) {
  function handleDelete(evt) {
    evt.preventDefault();
    onDelete(card);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDelete}
      title="Вы уверены?"
      name="confirm"
      //передаем булево значение для активации кнопки сабмита
      isValid={true}
      btnText="Да"></PopupWithForm>
  );
}
export default DeleteConfirmPopup;
