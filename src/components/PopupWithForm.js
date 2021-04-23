export function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name}`}>
            <form name={props.name} className="popup__container popup__container_profile" noValidate>
                <h3 className="popup__title">{props.title}</h3>
                {props.children}
                <button type="submit" className="popup__save-button popup__save-button_profile">{props.buttonText}</button>
                <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
            </form>
        </section>
    );
}