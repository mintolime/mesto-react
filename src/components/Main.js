import { useEffect, useState } from "react"
import { apiData } from "../utils/api/api"
import Card from "./Card"

function Main({ onEditAvatar, onEditProfile, onAddPlace,onCardClick }) {
  const [userName, setuserName] = useState('')
  const [userDescription, setuserDescription] = useState('')
  const [userAvatar, setuserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    apiData.getAllData()
      .then(([initialCards, userData]) => {
        setuserName(userData.name)
        setuserDescription(userData.about)
        setuserAvatar(userData.avatar)
        setCards(initialCards)
      })
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  }, [])

  return (
    <main className="main root__container">

      <section className="profile">
        <img className="profile__photo" src={userAvatar} alt="фото профиля" />
        <button className="button button_type_avatar-edit" onClick={onEditAvatar} ></button>
        <div className="profile__content">
          <h1 className="profile__name">{userName}</h1>
          <button className="button button_type_edit" onClick={onEditProfile}></button>
          <p className="profile__info">{userDescription}</p>
        </div>
        <button className="button button_type_add" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="cards" aria-label="галерея пользователя">
        <ul className="cards__list">
          <Card card={cards} onCardClick={onCardClick}/>
        </ul>
      </section>
      
    </main>
  )
}

export default Main;
