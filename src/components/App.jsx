import React from 'react';

import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
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
  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    setIsLoadingActive(true);
    apiData
      .getAllData()
      .then(([initialCards, userData]) => {
        setCards(initialCards);
        setCurrentUser(userData);
        setIsLoadingActive(false);
      })
      .catch((err) => {
        setIsErrorMessage(`Что-то пошло не так: ошибка запроса ${err}  😔`);
        console.log(err);
      });
  }, []);

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

  const handleUpdateUser = (data) => {
    apiData
      .updateUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
        setIsLoadingActive(false);
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

  const handleAddPlaceSubmit = (newCard) => {
    apiData
      .createCards(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

  const handleUpdateAvatar = (data) => {
    apiData
      .changeAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

  const handleDeleteClick = (card) => {
    apiData.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((item) => (item._id === card._id ? '' : item)));
    });
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
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
          <>
            <Main
              cards={cards}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardDeleteClick={handleDeleteClick}
              onCardLikeClick={handleCardLike}
            />
            <Footer />
          </>
        )}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <PopupWithForm title="Вы уверены?" name="confirm" btnText="Да"></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
