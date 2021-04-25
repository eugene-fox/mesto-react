import React from 'react';

export function PopupWithForm({name, title ,buttonText, children, isOpen, onClose}) {

    // Доделать закрытие по Esc и оверлею

    return (
        <section className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
            <form name={name} className="popup__container popup__container_profile" noValidate>
                <h3 className="popup__title">{title}</h3>
                {children}
                <button type="submit" className="popup__save-button popup__save-button_profile">{buttonText}</button>
                <button type="button" aria-label="Закрыть окно" className="popup__close-button" onClick={onClose} />
            </form>
        </section>
    );
}
