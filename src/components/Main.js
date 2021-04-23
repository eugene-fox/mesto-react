import avatarPicturePath from '../images/avatar.jpg'; 

export function Main() {
    return (
        <main>
            <section className="profile">
                <div className="profile__information">
                    <div className="profile__avatar">
                        <img className="profile__avatar-picture" src={avatarPicturePath}
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
    );
}