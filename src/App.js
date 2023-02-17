import './index.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

function App() {
  
  return (
    < >
      <Header />
      <Main />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="edit-profile" />
      <PopupWithForm title="Новое место<" name="add-card" />
      <PopupWithForm title="Обновить аватар" name="avatar" />
      <PopupWithForm title="Вы уверены?" name="confirm" />
      <ImagePopup />


      <template id="card-template">
        <li className="cards__item">
          <img className="cards__image" src="#" alt="#" />
          <div className="cards__inner">
            <h2 className="cards__title">cards__title</h2>
            <div className="cards__likes_items">
              <button className="button button_type_like" type="button"></button>
              <span className="cards__likes_score"></span>
            </div>
          </div>
          <button className="button button_type_delete "></button>
        </li>
      </template>



















    </>

  );
}

export default App;
