import React, { useState, useContext } from 'react';
import { api } from '../utils/Api';
import { Card } from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Main(props) {
  // const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__information">
          <div className="profile__avatar">
            <img className="profile__avatar-picture" src={currentUser.avatar}
              alt={currentUser.name} />
            <button type="button" aria-label="Изменить изображение профиля" className="profile__avatar-edit" onClick={props.onEditAvatar} />
          </div>
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
          <button type="button" aria-label="Редактировать информацию профиля" className="profile__edit-button" onClick={props.onEditProfile} />
          <button type="button" aria-label="Добавить новую карточку" className="profile__add-button" onClick={props.onAddPlace} />
        </div>
      </section>
      <section className="galery">
        <ul className="galery__places">
          {props.cards.map((card) => (
            <Card key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}