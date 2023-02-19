function Card({ card, onCardClick}) {

  return (
    < >
      {card.map((data) => (
        <li className="cards__item" key={data._id}>
          <img onClick={() => onCardClick(data)} className="cards__image" src={data.link} alt={data.name} />
          <div className="cards__inner">
            <h2 className="cards__title">{data.name}</h2>
            <div className="cards__likes_items">
              <button className="button button_type_like" type="button"></button>
              <span className="cards__likes_score">{data.likes.length}</span>
            </div>
          </div>
          <button className="button button_type_delete "></button>
        </li>))}
    </>
  )
}

export default Card;
