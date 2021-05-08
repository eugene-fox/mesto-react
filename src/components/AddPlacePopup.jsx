import { useState, useEffect, useContext } from 'react';
import { PopupWithForm } from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__inputs">
        <input
          type="text"
          name="name-of-place"
          className="popup__input popup__input_type_place-name"
          autoComplete="off"
          placeholder="Название"
          required minLength="2"
          maxLength="30"
          value={name === undefined ? "" : name}
          onChange={handleNameChange}
        />
        <span className="popup__error-message" id="name-of-place-error" />
        <input
          type="url"
          name="image-url"
          className="popup__input popup__input_type_image-link"
          autoComplete="off"
          placeholder="Ссылка на картинку"
          required
          value={link === undefined ? "" : link}
          onChange={handleLinkChange}
        />
        <span className="popup__error-message" id="image-url-error" />
      </div>
    </PopupWithForm>
  );
}
