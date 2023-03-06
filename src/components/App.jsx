import React from 'react';

import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import Loading from './Loading';
import { apiData } from '../utils/api/api';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {
  const [isLoadingActive, setIsLoadingActive] = React.useState(true);
  const [isErrorMessage, setIsErrorMessage] = React.useState('');
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setcurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    setIsLoadingActive(true);
    apiData
      .getAllData()
      .then(([initialCards, userData]) => {
        setCards(initialCards);
        setcurrentUser(userData);
        setIsLoadingActive(false);
        // console.log(initialCards);
      })
      .catch((err) => {
      setIsErrorMessage(`Что-то пошло не так: ошибка запроса ${err}  😔`)
      console.log(err)});
  }, []);

  // const fix = () => {
  //   console.log('work');
  // };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImagePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  //нужно проверить работает ли без перезагрузки !!
  const handleDeleteClick = (card) => {
    // // Отправляем запрос в API и получаем обновлённые данные карточки
    apiData.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((item) => item._id === card._id));
    });
  };

  //лайки работают
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // // Отправляем запрос в API и получаем обновлённые данные карточки
    apiData.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((data) => (data._id === card._id ? newCard : data)));
    });
  };

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        {isLoadingActive ? (
          <Loading error={isErrorMessage} />
        ) : (
          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardDeleteClick={handleDeleteClick}
            onCardLikeClick={handleCardLike}
          />
        )}
        <Footer />
        <EditProfilePopup  isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        {/* <PopupWithForm
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
        </PopupWithForm> */}

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
              required
            />
            <span className="form__input-error input-avatar-error"></span>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="confirm" btnText="Да"></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
