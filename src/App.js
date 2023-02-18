import './index.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';
import Card from './components/Card';
// import api from '../api/api'

function App() {

  //   function handlePopupOpen() {

  //   popup.classList.add('popup_opened')
  // }

  // function handleAddPlaceClick() {
  //   const popup = document.querySelector('.popup_add-card')
  //   popup.classList.add('popup_opened')
  // }

  // function handleEditAvatarClick() {
  //   const popup = document.querySelector('.popup_avatar')
  //   popup.classList.add('popup_opened')
  // }
  return (
    < >

      <Header />
      <Main />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="edit-profile"  isEditProfilePopupOpen ={false} />
      <PopupWithForm title="Новое место<" name="add-card"  isAddPlacePopupOpen = {false} />
      <PopupWithForm title="Обновить аватар" name="avatar" isEditAvatarPopupOpen = {false} />
      <PopupWithForm title="Вы уверены?" name="confirm" />
      <ImagePopup />
      <Card />

    </>

  );
}

export default App;
