import './index.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';

function App() {
  return (
    < >
      <Header />
      <Main />
      <Footer />

      <section className="popup popup_edit-profile">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form name="formProfile" className="form" noValidate>
            <fieldset className="form__inner">
              <input className="form__input  form__input_text_name " name="nameUser" type="text" id="input-name"
                aria-label="имя" placeholder="Ваше имя" minLength="2" maxLength="40" required />
              <span className='form__input-error input-name-error'></span>
              <input className="form__input form__input_text_about" name="aboutUser" type="text" id="input-about"
                aria-label="подпись" placeholder="О себе" minLength="2" maxLength="200" required />
              <span className='form__input-error input-about-error'></span>
            </fieldset>
            <button className="button button_type_save" type="submit">Сохранить</button>

          </form>
          <button type="button" className=" button button_type_close"></button>
        </div>
      </section>

      <section className="popup popup_add-card" aria-label="добавление карточек">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>
          <form name="formCard" className="form" noValidate>
            <fieldset className="form__inner">
              <input className="form__input  form__input_text_name" name="nameCard" type="text" id="input-name-card"
                aria-label="Наименование" placeholder="Название" minLength="2" maxLength="30" required />
              <span className='form__input-error input-name-card-error'></span>
              <input className="form__input form__input_text_about" name="linkCard" type="url" id="input-link"
                aria-label="подпись" placeholder="Ссылка на картинку" required />
              <span className='form__input-error input-link-error'></span>
            </fieldset>
            <button className="button button_type_save" type="submit">Создать</button>
          </form>
          <button type="button" className=" button button_type_close"></button>
        </div>
      </section>

      <section className="popup popup_confirm" aria-label="подтверждение удаления">
        <div className="popup__container">
          <form name="formConfirm" className="form" noValidate>
            <h3 className="popup__title">Вы уверены?</h3>
            <button className="button button_type_save button_type_save-confirm" type="submit">Да</button>
          </form>
          <button type="button" className=" button button_type_close"></button>
        </div>
      </section>

      <section className="popup popup_avatar" aria-label="обновление аватара">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form name="formAvatar" className="form" noValidate>
            <fieldset className="form__inner">
              <input className="form__input" name="linkAvatar" type="url" id="input-avatar" aria-label="подпись" required />
              <span className='form__input-error input-avatar-error'></span>
            </fieldset>
            <button className="button button_type_save button_type_save-avatar" type="submit">Сохранить</button>
          </form>
          <button type="button" className=" button button_type_close"></button>
        </div>
      </section>

      <section className="popup popup_image" aria-label="фотографии карточек">
        <div className="popup__container popup__container_image ">
          <figure className="figure">
            <img className="figure__image" src="#" alt="#" />
            <figcaption className="figure__info"></figcaption>
          </figure>
          <button type="button" className=" button button_type_close"></button>
        </div>
      </section>

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
