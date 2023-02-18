function Main() {


  return (
      <main className="main root__container">

        <section className="profile">
          <img className="profile__photo" src="#" alt="фото профиля" />
          <button className="button button_type_avatar-edit" onEditAvatar={false}></button>
          <div className="profile__content">
            <h1 className="profile__name">Жак кустарник</h1>
            <button className="button button_type_edit" onEditProfile={false}></button>
            <p className="profile__info">Редкий вид</p>
          </div>
          <button className="button button_type_add" type="button" onAddPlace={false}></button>
        </section>

        <section className="cards" aria-label="галерея пользователя">
          <ul className="cards__list">
          </ul>
        </section>

      </main>
  )
}


export default Main;
