function PopupWithForm({ name, title, children }) {
  return (
    < >
      <section className="popup popup_type_{name}" aria-label="обновление аватара">
        <div className="popup__container">
          <h3 className="popup__title">{title}`</h3>
          <form name={name} className="form" noValidate>
             {children}
            <button className="button button_type_save button_type_save-avatar" type="submit">Сохранить</button>
          </form>
          <button type="button" className=" button button_type_close"></button>
        </div>
      </section>

    </>
  )
}


export default PopupWithForm;
