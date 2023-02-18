function Card({cards}) {
  return (
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
    )
}


export default Card;
