import React from 'react';

import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    console.log('Клик по кнопке изменения аватара.');
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    console.log('Клик по кнопке изменения заголовка и описания профиля.');
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    console.log('Клик по кнопке добавления новой карточки.');
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__content">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
          <Footer />

          <PopupWithForm name="update-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <div className="popup__inputs">
              <input type="url" name="avatar-url" className="popup__input popup__input_type_avatar-url" value=""
                autocomplete="off" placeholder="url" required minlength="2" maxlength="" />
              <span className="popup__error-message" id="avatar-url-error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm name="profile-edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <div className="popup__inputs">
              <input type="text" name="name-of-user" className="popup__input popup__input_type_name" value="" autocomplete="off"
                required minlength="2" maxlength="40" />
              <span className="popup__error-message" id="name-of-user-error"></span>
              <input type="text" name="description" className="popup__input popup__input_type_description" value=""
                autocomplete="off" required minlength="2" maxlength="200" />
              <span className="popup__error-message" id="description-error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <div className="popup__inputs">
              <input type="text" name="name-of-place" className="popup__input popup__input_type_place-name" value=""
                autocomplete="off" placeholder="Название" required minlength="2" maxlength="30" />
              <span className="popup__error-message" id="name-of-place-error"></span>
              <input type="url" name="image-url" className="popup__input popup__input_type_image-link" value="" autocomplete="off"
                placeholder="Ссылка на картинку" required />
              <span className="popup__error-message" id="image-url-error"></span>
            </div>
          </PopupWithForm>

          <section className="popup" id="deleteConfirm">
            <form name="delete-confirm" className="popup__container popup__container_deleteConfirm" novalidate>
              <h3 className="popup__title">Вы уверены?</h3>
              <button type="submit" className="popup__save-button popup__save-button_card">Да</button>
              <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
            </form>
          </section>

          <ImagePopup />

        </div>
      </div>
    </div>
  );
}

export default App;
