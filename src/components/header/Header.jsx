import React, { useState} from "react";
import ModalConnect from "../ModalConnect/ModalConnect";
import "../header/Header.css";
import { Link } from "react-scroll";

function Header() {
  const [modalConnectActive, setModalConnectActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  
  const closeMenu = () => {
    setMenuActive(false);
  }

  return (
    <header className="header">
      <nav className="nav-bar-header">
        <div className="logo-header" />
        <div className={menuActive ? "menu-icon menu-icon-active" : "menu-icon" } onClick={toggleMenu}>
          <i className={menuActive ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={` ${menuActive ? "nav-bar-header-items nav-bar-header-items-active" : "nav-bar-header-items"}`}>
          <li className="nav-bar-header-item">
            <Link
              to="advanteges"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={closeMenu}
            >
              О проекте
            </Link>
          </li>
          <li className="nav-bar-header-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={closeMenu}
            >
              Галерея
            </Link>
          </li>
          <li className="nav-bar-header-item">
            <Link
              to="buy-invest"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={closeMenu}
            >
              Купить квартиру
            </Link>
          </li>
          <li className="nav-bar-header-item">
            <Link
              to="buy-invest"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={closeMenu}
            >
              Цена инвестиции
            </Link>
          </li>
          <li className="nav-bar-header-item">
            <Link
              to="layouts"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={closeMenu}
            >
              Планировка
            </Link>
          </li>
          <li className="nav-bar-header-item">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={closeMenu}
            >
              Преимущества
            </Link>
          </li>
        </ul>
        <div className="connect">
          <a href="tel:+97142473678" className="telephone-item">
            +97 14 247 36 78
          </a>
          <button
            className="connect-button"
            onClick={() => setModalConnectActive(true)}
          >
            Связь
          </button>
          <ModalConnect
            active={modalConnectActive}
            setActive={setModalConnectActive}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;




