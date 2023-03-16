import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteConfirmPopup({ card, isOpen, onClose,onDelete}) {
  function handleDelete(evt){
    evt.preventDefault();
    onDelete(card)
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleDelete}
      title="Вы уверены?"
      name="confirm"
      btnText="Да"></PopupWithForm>
  );
}
export default DeleteConfirmPopup;
