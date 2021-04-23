export function ImagePopup() {
    return (
        <section className="popup" id="fullSizeImage">
            <div className="popup__image-container">
                <figure className="popup__image-group">
                    <img className="popup__image" src="#" alt="Увеличенное изображение" />
                    <figcaption className="popup__image-title"></figcaption>
                </figure>
                <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
            </div>
        </section>
    );
}