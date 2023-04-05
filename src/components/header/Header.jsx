import React, { useState } from "react";
import ModalConnect from "../ModalConnect/ModalConnect";
import "../header/Header.css";
import { Link } from "react-scroll";

function Header() {
  const [ModalConnectActive, setModalConnectActive] = useState(false);

  return (
    <header className="header">
      <nav className="nav-bar-header">
        <div className="logo-header" />
        <ul className="nav-bar-header-items">
          <li className="nav-bar-header-item">
            <Link
              to="advanteges"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
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
          <ModalConnect active={ModalConnectActive} setActive={setModalConnectActive} />
        </div>
      </nav>
    </header>
  );
}

export default Header;

