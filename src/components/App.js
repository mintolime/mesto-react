//Спасибо за ревью. В нашей 58-й группе делятся хорошими впечатлениями после проверки работ. Все хотела к вам на ревью попасть :) 
import "../index.css"
import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setImagePopupOpen(false);
    setSelectedCard({})
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
    setImagePopupOpen(true)
  }

  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) }

  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true) }

  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить">
        <fieldset className="form__inner">
          <input
            className="form__input  form__input_text_name "
            name="nameUser"
            type="text"
            id="input-name"
            aria-label="имя"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            required />
          <span className="form__input-error input-name-error"></span>
          <input
            className="form__input form__input_text_about"
            name="aboutUser"
            type="text"
            id="input-about"
            aria-label="подпись"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required />
          <span className="form__input-error input-about-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
            required />
          <span className="form__input-error input-name-card-error"></span>
          <input
            className="form__input form__input_text_about"
            name="linkCard"
            type="url"
            id="input-link"
            aria-label="подпись"
            placeholder="Ссылка на картинку"
            required />
          <span className="form__input-error input-link-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        btnText="Сохранить">
        <fieldset className="form__inner">
          <input
            className="form__input"
            name="linkAvatar"
            type="url"
            id="input-avatar"
            aria-label="подпись"
            required />
          <span className="form__input-error input-avatar-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="confirm"
        btnText="Да"
      ></PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen} />
    </>
  )
}

export default App
