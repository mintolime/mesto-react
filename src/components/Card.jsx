function Card({ card, onCardClick}) {
  return (
    < >
        <li className="cards__item" >
          <img onClick={() => onCardClick(card)} className="cards__image" src={card.link} alt={card.name} />
          <div className="cards__inner">
            <h2 className="cards__title">{card.name}</h2>
            <div className="cards__likes_items">
              <button className="button button_type_like" type="button"></button>
              <span className="cards__likes_score">{card.likes.length}</span>
            </div>
          </div>
          <button className="button button_type_delete"></button>
        </li>
    </>
  )
}

export default Card;
