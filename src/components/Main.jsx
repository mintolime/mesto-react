import React from 'react';
import { apiData } from '../utils/api/api';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    apiData
      .getAllData()
      .then(([initialCards]) => {
        setCards(initialCards);
      })
      .catch((err) => console.log(`Ошибка: что-то пошло не так: ${err}`));
  }, []);

  return (
    <main className="main root__container">
      <section className="profile">
        <img className="profile__photo" src={currentUser.avatar} alt="фото профиля" />
        <button className="button button_type_avatar-edit" onClick={onEditAvatar}></button>
        <div className="profile__content">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="button button_type_edit" onClick={onEditProfile}></button>
          <p className="profile__info">{currentUser.about}</p>
        </div>
        <button className="button button_type_add" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="cards" aria-label="галерея пользователя">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
