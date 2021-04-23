import headerLogoPath from '../images/header-logo.svg'; //Путь к изображению внутри сборки

//Функциональный компоненет заголовка
export function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogoPath} alt="Логотип Mesto Russia" />
        </header>
    )
}