import React from 'react';
import avatarPicturePath from '../images/avatar.jpg';
import { api } from '../utils/Api';

export function Main(props) {
const [profileAvatar, setProfileAvatar] = React.useState('');
const [profileName, setProfileName] = React.useState('');
const [profileDescription, setProfileDescription] = React.useState('');

React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
    .then(([userData, cardData]) => {
        console.log(userData);
        setProfileAvatar(userData.avatar);
        setProfileName(userData.name);
        setProfileDescription(userData.about);
    }).catch(err => console.log(err));
}, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__information">
                    <div className="profile__avatar">
                        <img className="profile__avatar-picture" src={profileAvatar}
                            alt="Фотография Жака-Ива Кусто" />
                        <button type="button" aria-label="Изменить изображение профиля" className="profile__avatar-edit" onClick={props.onEditAvatar} />
                    </div>
                    <h1 className="profile__name">{profileName}</h1>
                    <p className="profile__description">{profileDescription}</p>
                    <button type="button" aria-label="Редактировать информацию профиля" className="profile__edit-button" onClick={props.onEditProfile} />
                    <button type="button" aria-label="Добавить новую карточку" className="profile__add-button" onClick={props.onAddPlace} />
                </div>
            </section>
            <section className="galery">
                <ul className="galery__places"></ul>
            </section>
        </main>
    );
}