import React, { useState } from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
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

  const handleUpdateUser = (userInfo) => {
    api.setUserInfo(userInfo).then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    })
  }

  const handleUpdateAvatar = (newAvatarUrl) => {
    console.log(newAvatarUrl);
    api.updataAvatar({ avatar: newAvatarUrl }).then(() => {
      closeAllPopups();
    })

  }

  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(
      () => {
       setCards((state) => {
        state.filter((c) => c._id !== card._id)
       })
      }
    )
  }

  React.useEffect(() => {
    api.getCards()
      .then((cardData) => {
        setCards(cardData);
      }).catch(err => console.log(err));
  }, []);

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
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />

            <Footer />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />

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
