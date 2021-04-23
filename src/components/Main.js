import avatarPicturePath from '../images/avatar.jpg';

export function Main() {

    // императивные обработчики
    const handleEditAvatarClick = () => {
        console.log('Клик по кнопке изменения аватара.');
        const avatarEditPopup = document.getElementById('updateAvatar');
        avatarEditPopup.classList.add('popup_opened');
    }
    const handleEditProfileClick = () => {
        console.log('Клик по кнопке изменения заголовка и описания профиля.');
        const editPopup = document.getElementById('profileEdit');
        editPopup.classList.add('popup_opened');
    }
    const handleAddPlaceClick = () => {
        console.log('Клик по кнопке добавления новой карточки.');
        const addPopup = document.getElementById('addCard');
        addPopup.classList.add('popup_opened');
    }

    return (
        <main>
            <section className="profile">
                <div className="profile__information">
                    <div className="profile__avatar">
                        <img className="profile__avatar-picture" src={avatarPicturePath}
                            alt="Фотография Жака-Ива Кусто" />
                        <button type="button" aria-label="Изменить изображение профиля" className="profile__avatar-edit" onClick={handleEditAvatarClick} />
                    </div>
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <p className="profile__description">Исследователь океана</p>
                    <button type="button" aria-label="Редактировать информацию профиля" className="profile__edit-button" onClick={handleEditProfileClick} />
                    <button type="button" aria-label="Добавить новую карточку" className="profile__add-button" onClick={handleAddPlaceClick} />
                </div>
            </section>
            <section className="galery">
                <ul className="galery__places"></ul>
            </section>
        </main>
    );
}