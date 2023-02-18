
function Main({ onEditAvatar, onEditProfile, onAddPlace }) {

  return (
    <main className="main root__container">

      <section className="profile">
        <img className="profile__photo" src="#" alt="фото профиля" />
        <button className="button button_type_avatar-edit" onClick={onEditAvatar} ></button>
        <div className="profile__content">
          <h1 className="profile__name">Жак кустарник</h1>
          <button className="button button_type_edit" onClick={onEditProfile}></button>
          <p className="profile__info">Редкий вид</p>
        </div>
        <button className="button button_type_add" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="cards" aria-label="галерея пользователя">
        <ul className="cards__list">
        </ul>
      </section>

    </main>
  )
}


export default Main;
