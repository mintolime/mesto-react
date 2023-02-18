import "./index.css"
import {useState} from "react"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Main from "./components/Main.js"
import PopupWithForm from "./components/PopupWithForm"
import ImagePopup from "./components/ImagePopup"
import Card from "./components/Card"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  // const fix = () => {
  //   console.log('work')
  // }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen ? true : ""}
      >
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
            required
          />
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
            required
          />
          <span className="form__input-error input-about-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add-card"
        isOpen={isAddPlacePopupOpen ? true : ""}
      >
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
            required
          />
          <span className="form__input-error input-link-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen ? true : ""}
      >
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

      <PopupWithForm title="Вы уверены?" name="confirm"></PopupWithForm>
      <ImagePopup />
      <Card />
    </>
  )
}

export default App
