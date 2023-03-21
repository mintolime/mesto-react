//Примите мои извинения , вышло недоразумение. отправляю проект повторно в полном виде!

import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import DeleteConfirmPopup from './DeleteConfirmPopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import Loading from './Loading';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';

import { apiData } from '../utils/api/api';
import * as auth from '../utils/api/auth';
import ProtectedRoute from './ProtectedRoute';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isRegistration, setIsRegistration] = React.useState(false);
  const [isLoadingActive, setIsLoadingActive] = React.useState(true);
  const [isErrorMessage, setIsErrorMessage] = React.useState('');
  const [userInfo, setUserInfo] = React.useState('');

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  const navigate = useNavigate();

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

  React.useEffect(() => {
    handleСheckToken();
  }, []);

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsInfoTooltipOpen(false);
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

  const handleRegistrationSuccess = () => {
    setIsInfoTooltipOpen(true);
  };

  const handleDeletePlaceClick = (card) => {
    setIsDeleteCardPopupOpen(true);
    setSelectedCard(card);
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
    apiData
      .deleteCard(card._id)
      .then(() => {
        closeAllPopups();
        setCards((state) => state.filter((item) => (item._id === card._id ? '' : item)));
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    apiData
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((data) => (data._id === card._id ? newCard : data)));
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
      });
  };

  const handleRegistration = (data) => {
    return auth
      .register(data)
      .then((res) => {
        console.log(res);
        setIsRegistration(true);
        handleRegistrationSuccess();
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
        setIsRegistration(false);
        handleRegistrationSuccess();
      });
  };

  //вход работает
  const handleAuthorization = (data) => {
    return auth
      .authorize(data)
      .then((data) => {
        setIsLoggedIn(true);
        handleСheckToken();
        localStorage.setItem('jwt', data.token);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
        setIsLoggedIn(false);
        handleRegistrationSuccess();
      });
  };

  const handleСheckToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      console.log(jwt);
      // проверим токен
      auth
        .getContent(jwt)
        .then((res) => {
          console.log('work');
          if (res) {
            // авторизуем пользователя
            setUserInfo(res.data.email);
            setIsLoggedIn(true);
            navigate('/', { replace: true });
          }
        })
        .catch((err) => {
          console.log(`Что-то пошло не так: ошибка запроса ${err}  😔`);
        });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/signin', { replace: true });
    setIsLoggedIn(false);
  };
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        {isLoadingActive ? (
          <Loading error={isErrorMessage} />
        ) : (
          <>
            <Header isCorrectLogin={isLoggedIn} onLogout={handleLogout} userEmail={userInfo} />
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute
                    component={Main}
                    loggedIn={isLoggedIn}
                    cards={cards}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardDeleteClick={handleDeletePlaceClick}
                    onCardLikeClick={handleCardLike}
                  />
                }
              />
              <Route
                path="/signup"
                element={<Register onRegister={handleRegistration} />}
                loggedIn={isLoggedIn}
              />
              <Route
                path="/signin"
                element={<Login onAuthorization={handleAuthorization} />}
                loggedIn={isLoggedIn}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            {isLoggedIn && <Footer />}
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
        <DeleteConfirmPopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isDeleteCardPopupOpen}
          onDelete={handleDeleteClick}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isCorrectLogin={isRegistration}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
