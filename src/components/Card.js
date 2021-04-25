export function Card({card, onCardClick}) {

const handelClick = () => {
  onCardClick(card);
}

  return (
    <li className="place-card">
      <button type="button" aria-label="Удалить карточку" className="place-card__delete-button"></button>
      <img className="place-card__photo" src={card.link}
        alt={card.name} onClick={handelClick} />
      <div className="place-card__photo-description">
        <h2 className="place-card__photo-name">{card.name}</h2>
        <div className="place-card__like-section">
          <button type="button" aria-label="Поставить лайк" className="place-card__like-button"></button>
          <span className="place-card__like-count">0</span>
        </div>
      </div>
    </li>
  )
}
