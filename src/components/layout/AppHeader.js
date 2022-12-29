import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { useState } from "react";
import LoginForm from "../../features/auth/LoginForm";

import { createModal, useModals } from "../../features/modals/Modal";
import Watchlist from "../../features/watchlist/WatchList";

const AppHeader = () => {
  const [active, setActive] = useState(false);

  const modal = useModals();

  return (
    <div className="header container">
      {modal.length > 0 && modal[modal.length - 1].data === "login" && (
        <LoginForm />
      )}

      {modal.length > 0 && modal[modal.length - 1].data === "watchlist" && (
        <Watchlist />
      )}
      <div
        className={`header__inner ${
          active ? "dark-background" : "transparent"
        }`}
      >
        <h1 className="header__inner__logo">Logo</h1>

        <ul className={`header__inner__menu ${!active && "navbar-active"}`}>
          <li>
            <a className="header__inner__menu__link" href="#menu1">
              Menu 1
            </a>
          </li>
          <li>
            <a className="header__inner__menu__link" href="#menu2">
              Menu 2
            </a>
          </li>
          <li className="header__inner__menu__select">
            <select className="header__inner__menu__select__inner">
              <option
                className="header__inner__menu__select__inner__options"
                value="tr"
              >
                Tr
              </option>
              <option
                className="header__inner__menu__select__inner__options"
                value="ar"
              >
                Ar
              </option>
              <option
                className="header__inner__menu__select__inner__options"
                value="fr"
              >
                Fr
              </option>
            </select>
          </li>
        </ul>

        <div className="header__inner__btn-container">
          <button
            className="header__inner__btn-container__btn"
            onClick={() => createModal("watchlist")}
          >
            Watchlist
            <span className="header__inner__btn-container__btn__circle"></span>
          </button>
          <button
            className="header__inner__btn-container__btn"
            onClick={() => createModal("login")}
          >
            Sign In
          </button>
        </div>
      </div>
      <FaBars
        className={`header__hamburger-menu ${
          active ? "hamburger-menu-close" : "hamburger-menu-block"
        }`}
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
      />
      <FaTimes
        className={`header__hamburger-menu-close ${
          active ? "hamburger-menu-block" : "hamburger-menu-close"
        }`}
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
      />
    </div>
  );
};

export default AppHeader;
