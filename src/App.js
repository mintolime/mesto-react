import logo from '../src/images/header-logo.svg';
import './App.css';

function App() {
  return (
    <div className="root">


      <header className="header">
        <img className="header__logo" src={logo} alt="логотип шапки" />
      </header>
      <main className="main root__container">
        <section className="profile">
          <img className="profile__photo" src="#" alt="фото профиля" />
          <button className="button button_type_avatar-edit"></button>
          <div className="profile__content">
            <h1 className="profile__name">Жак кустарник</h1>
            <button className="button button_type_edit"></button>
            <p className="profile__info">Редкий вид</p>
          </div>
          <button className="button button_type_add" type="button"></button>
        </section>

        <section className="cards" aria-label="галерея пользователя">
          <ul className="cards__list">
          </ul>
        </section>

      </main>

      <footer className="footer root__container">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>

      <section className="popup popup_edit-profile">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form name="formProfile" className="form" novalidate>
            <fieldset className="form__inner">
              <input className="form__input  form__input_text_name " name="nameUser" type="text" id="input-name"
                aria-label="имя" placeholder="Ваше имя" minlength="2" maxlength="40" required />
              <span className='form__input-error input-name-error'></span>
              <input className="form__input form__input_text_about" name="aboutUser" type="text" id="input-about"
                aria-label="подпись" placeholder="О себе" minlength="2" maxlength="200" required />
              <span className='form__input-error input-about-error'></span>
            </fieldset>
            <button className="button button_type_save" type="submit">Сохранить</button>

          </form>
          <button type="button" className=" button button_type_close"></button>
        </div>
      </section>

      <section className="popup popup_confirm" aria-label="подтверждение удаления">
        <div className="popup__container">
          <form name="formConfirm" className="form" novalidate>
            <h3 className="popup__title">Вы уверены?</h3>
            <button className="button button_type_save button_type_save-confirm" type="submit">Да</button>
          </form>
          <button type="button" className=" button button_type_close"></button>
        </div>
      </section>

      <section className="popup popup_avatar" aria-label="обновление аватара">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form name="formAvatar" className="form" novalidate>
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
      <img className="cards__image" src="#" alt="#"/>
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



















    </div>

  );
}

export default App;
