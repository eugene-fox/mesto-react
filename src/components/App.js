import React, { useState } from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  //Стейт данных текущего пользователя
  const [currentUser, setCurrentUser] = useState({});

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardData]) => {
        setCurrentUser(userData);
        // setCards(cardData);
      }).catch(err => console.log(err));
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <div className="page__content">
            <Header />

            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
            />

            <Footer />

            <PopupWithForm name="update-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
              <div className="popup__inputs">
                <input type="url" name="avatar-url" className="popup__input popup__input_type_avatar-url"
                  autoComplete="off" placeholder="url" required minLength="2" maxLength="" />
                <span className="popup__error-message" id="avatar-url-error"></span>
              </div>
            </PopupWithForm>

            <PopupWithForm name="profile-edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
              <div className="popup__inputs">
                <input type="text" name="name-of-user" className="popup__input popup__input_type_name" autoComplete="off"
                  required minLength="2" maxLength="40" />
                <span className="popup__error-message" id="name-of-user-error"></span>
                <input type="text" name="description" className="popup__input popup__input_type_description"
                  autoComplete="off" required minLength="2" maxLength="200" />
                <span className="popup__error-message" id="description-error"></span>
              </div>
            </PopupWithForm>

            <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
              <div className="popup__inputs">
                <input type="text" name="name-of-place" className="popup__input popup__input_type_place-name"
                  autoComplete="off" placeholder="Название" required minLength="2" maxLength="30" />
                <span className="popup__error-message" id="name-of-place-error"></span>
                <input type="url" name="image-url" className="popup__input popup__input_type_image-link" autoComplete="off"
                  placeholder="Ссылка на картинку" required />
                <span className="popup__error-message" id="image-url-error"></span>
              </div>
            </PopupWithForm>

            <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonText="Да" onClose={closeAllPopups} />

            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
            />

          </div>
        </div>
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
