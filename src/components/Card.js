import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Card({ card, onCardClick }) {

  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `place-card__delete-button ${isOwn ? 'place-card__delete-button_visible.css' : 'place-card__delete-button_hidden'}`
  );

  const handelClick = () => {
    onCardClick(card);
  }

  return (
    <li className="place-card">
      <button type="button" aria-label="Удалить карточку" className={cardDeleteButtonClassName} />
      <img className="place-card__photo" src={card.link}
        alt={card.name} onClick={handelClick} />
      <div className="place-card__photo-description">
        <h2 className="place-card__photo-name">{card.name}</h2>
        <div className="place-card__like-section">
          <button type="button" aria-label="Поставить лайк" className="place-card__like-button" />
          <span className="place-card__like-count">0</span>
        </div>
      </div>
    </li>
  )
}
