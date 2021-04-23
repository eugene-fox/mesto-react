import headerLogoPath from '../images/header-logo.svg'; //Путь к изображению внутри сборки

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__content">
      <header className="header">
        <img className="header__logo" src={headerLogoPath} alt="Логотип Mesto Russia" />
      </header>

      <main>

        <section className="profile">
          <div className="profile__information">
            <div className="profile__avatar">
              <img className="profile__avatar-picture" src="<%=require('./images/avatar.jpg')%>"
                alt="Фотография Жака-Ива Кусто" />
              <button type="button" aria-label="Изменить изображение профиля" className="profile__avatar-edit"></button>
            </div>
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <p className="profile__description">Исследователь океана</p>
            <button type="button" aria-label="Редактировать информацию профиля" className="profile__edit-button"></button>
            <button type="button" aria-label="Добавить новую карточку" className="profile__add-button"></button>
          </div>
        </section>

        <section className="galery">
          <ul className="galery__places"></ul>
        </section>

      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>

      <section className="popup" id="profileEdit">
        <form name="profile-edit" className="popup__container popup__container_profile" novalidate>
          <h3 className="popup__title">Редактировать профиль</h3>
          <div className="popup__inputs">
            <input type="text" name="name-of-user" className="popup__input popup__input_type_name" value="" autocomplete="off"
              required minlength="2" maxlength="40" />
            <span className="popup__error-message" id="name-of-user-error"></span>
            <input type="text" name="description" className="popup__input popup__input_type_description" value=""
              autocomplete="off" required minlength="2" maxlength="200" />
            <span className="popup__error-message" id="description-error"></span>
          </div>
          <button type="submit" className="popup__save-button popup__save-button_profile">Сохранить</button>
          <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
        </form>
      </section>

      <section className="popup" id="addCard">
        <form name="profile-edit" className="popup__container popup__container_card" novalidate>
          <h3 className="popup__title">Новое место</h3>
          <div className="popup__inputs">
            <input type="text" name="name-of-place" className="popup__input popup__input_type_place-name" value=""
              autocomplete="off" placeholder="Название" required minlength="2" maxlength="30" />
            <span className="popup__error-message" id="name-of-place-error"></span>
            <input type="url" name="image-url" className="popup__input popup__input_type_image-link" value="" autocomplete="off"
              placeholder="Ссылка на картинку" required />
            <span className="popup__error-message" id="image-url-error"></span>
          </div>
          <button type="submit" className="popup__save-button popup__save-button_card">Создать</button>
          <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
        </form>
      </section>

      <section className="popup" id="deleteConfirm">
        <form name="delete-confirm" className="popup__container popup__container_deleteConfirm" novalidate>
          <h3 className="popup__title">Вы уверены?</h3>
          <button type="submit" className="popup__save-button popup__save-button_card">Да</button>
          <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
        </form>
      </section>

      <section className="popup" id="updateAvatar">
        <form name="delete-confirm" className="popup__container popup__container_avatar-edit" novalidate>
          <h3 className="popup__title">Обновить аватар</h3>
          <div className="popup__inputs">
            <input type="url" name="avatar-url" className="popup__input popup__input_type_avatar-url" value=""
              autocomplete="off" placeholder="url" required minlength="2" maxlength="" />
            <span className="popup__error-message" id="avatar-url-error"></span>
          </div>
          <button type="submit" className="popup__save-button popup__save-button_card">Сохранить</button>
          <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
        </form>
      </section>

      <section className="popup" id="fullSizeImage">
        <div className="popup__image-container">
          <figure className="popup__image-group">
            <img className="popup__image" src="#" alt="Увеличенное изображение" />
            <figcaption className="popup__image-title"></figcaption>
          </figure>
          <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
        </div>
      </section>
      </div>
      </div>
    </div>
  );
}

export default App;