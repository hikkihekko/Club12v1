import React,{ useState }  from "react";
import ModalConnect from "../ModalConnect/ModalConnect";
import '../header/Header.css';


function Header() {
    const [ModalConnectActive, setModalConnectActive] = useState(false)

    return(
        <header className="header">
            <nav className="nav-bar-header">
                <div className="logo-header"/>
                <ul className="nav-bar-header-items">
                    <li className="nav-bar-header-item" > <a href=""> О проекте </a></li>
                    <li className="nav-bar-header-item" > <a href="">Галерея</a></li>
                    <li className="nav-bar-header-item" > <a href="">Купить квартиру</a></li>
                    <li className="nav-bar-header-item" > <a href="">Цена инвестиции</a></li>
                    <li className="nav-bar-header-item" > <a href="">Планировка</a></li>
                    <li className="nav-bar-header-item" > <a href="">Преимущества</a></li>
                </ul>
                <div className="connect">
                    <a href="tel:+97142473678" className="telephone-item">+97 14 247 36 78</a>
                    <button className="connect-button" onClick={()=> setModalConnectActive(true)}> Связь </button>
                    <ModalConnect active={ModalConnectActive} setActive={setModalConnectActive}/>
                </div>
            </nav>
        </header>
    );
}

export default Header;
