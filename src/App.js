import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="header">
        <img class="header__logo" src="<%=require('./images/header-logo.svg')%>" alt="Логотип Mesto Russia" />
      </header>

      <main>

        <section class="profile">
          <div class="profile__information">
            <div class="profile__avatar">
              <img class="profile__avatar-picture" src="<%=require('./images/avatar.jpg')%>"
                alt="Фотография Жака-Ива Кусто" />
              <button type="button" aria-label="Изменить изображение профиля" class="profile__avatar-edit"></button>
            </div>
            <h1 class="profile__name">Жак-Ив Кусто</h1>
            <p class="profile__description">Исследователь океана</p>
            <button type="button" aria-label="Редактировать информацию профиля" class="profile__edit-button"></button>
            <button type="button" aria-label="Добавить новую карточку" class="profile__add-button"></button>
          </div>
        </section>

        <section class="galery">
          <ul class="galery__places"></ul>
        </section>

      </main>

      <footer class="footer">
        <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>

      <section class="popup" id="profileEdit">
        <form name="profile-edit" class="popup__container popup__container_profile" novalidate>
          <h3 class="popup__title">Редактировать профиль</h3>
          <div class="popup__inputs">
            <input type="text" name="name-of-user" class="popup__input popup__input_type_name" value="" autocomplete="off"
              required minlength="2" maxlength="40" />
            <span class="popup__error-message" id="name-of-user-error"></span>
            <input type="text" name="description" class="popup__input popup__input_type_description" value=""
              autocomplete="off" required minlength="2" maxlength="200" />
            <span class="popup__error-message" id="description-error"></span>
          </div>
          <button type="submit" class="popup__save-button popup__save-button_profile">Сохранить</button>
          <button type="button" aria-label="Закрыть окно" class="popup__close-button"></button>
        </form>
      </section>

      <section class="popup" id="addCard">
        <form name="profile-edit" class="popup__container popup__container_card" novalidate>
          <h3 class="popup__title">Новое место</h3>
          <div class="popup__inputs">
            <input type="text" name="name-of-place" class="popup__input popup__input_type_place-name" value=""
              autocomplete="off" placeholder="Название" required minlength="2" maxlength="30" />
            <span class="popup__error-message" id="name-of-place-error"></span>
            <input type="url" name="image-url" class="popup__input popup__input_type_image-link" value="" autocomplete="off"
              placeholder="Ссылка на картинку" required />
            <span class="popup__error-message" id="image-url-error"></span>
          </div>
          <button type="submit" class="popup__save-button popup__save-button_card">Создать</button>
          <button type="button" aria-label="Закрыть окно" class="popup__close-button"></button>
        </form>
      </section>

      <section class="popup" id="deleteConfirm">
        <form name="delete-confirm" class="popup__container popup__container_deleteConfirm" novalidate>
          <h3 class="popup__title">Вы уверены?</h3>
          <button type="submit" class="popup__save-button popup__save-button_card">Да</button>
          <button type="button" aria-label="Закрыть окно" class="popup__close-button"></button>
        </form>
      </section>

      <section class="popup" id="updateAvatar">
        <form name="delete-confirm" class="popup__container popup__container_avatar-edit" novalidate>
          <h3 class="popup__title">Обновить аватар</h3>
          <div class="popup__inputs">
            <input type="url" name="avatar-url" class="popup__input popup__input_type_avatar-url" value=""
              autocomplete="off" placeholder="url" required minlength="2" maxlength="" />
            <span class="popup__error-message" id="avatar-url-error"></span>
          </div>
          <button type="submit" class="popup__save-button popup__save-button_card">Сохранить</button>
          <button type="button" aria-label="Закрыть окно" class="popup__close-button"></button>
        </form>
      </section>

      <section class="popup" id="fullSizeImage">
        <div class="popup__image-container">
          <figure class="popup__image-group">
            <img class="popup__image" src="#" alt="Увеличенное изображение" />
            <figcaption class="popup__image-title"></figcaption>
          </figure>
          <button type="button" aria-label="Закрыть окно" class="popup__close-button"></button>
        </div>
      </section>
    </div>
  );
}

export default App;
