function ImagePopup({card,onClose}) {
  //массив передается
  console.log(card)

  return (
    < >
      <section className={`popup popup_image ${card ? 'popup_opened' : ''}`} aria-label="фотографии карточек">
        <div className="popup__container popup__container_image ">
          <figure className="figure">
            <img className="figure__image" src="#" alt="#" />
            <figcaption className="figure__info"></figcaption>
          </figure>
          <button type="button" className=" button button_type_close" onClick={onClose}></button>
        </div>
      </section>
    </>
    )
}


export default ImagePopup;
