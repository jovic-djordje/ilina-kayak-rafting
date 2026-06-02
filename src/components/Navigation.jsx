import { MenuIcon } from "../assets/icons/icon";
import { Logo } from "../assets/images";
import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navigation = ({ t, language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="header-holder">
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <TfiClose className="menu-icon close-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </button>

        <Logo className="logo" />

        <div className="btn-holder">
          <input
            type="checkbox"
            id="check"
            onChange={toggleLanguage}
            checked={language === "en"}
          />
          <label htmlFor="check" className="btn"></label>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`off-screen-menu ${isMenuOpen ? "active" : ""}`}
      >
        <div className="off-screen-menu-holder">
          <ul className="off-screen-menu-list">
            <li className="off-screen-menu-item">
              <a
                href="#home"
                className="off-screen-menu-link"
                onClick={toggleMenu}
              >
                {t.footer.linkOne}
              </a>
            </li>
            <li className="off-screen-menu-item">
              <a
                href="#services"
                className="off-screen-menu-link"
                onClick={toggleMenu}
              >
                {t.footer.linkTwo}
              </a>
            </li>
            <li className="off-screen-menu-item">
              <a
                href="#why-us"
                className="off-screen-menu-link"
                onClick={toggleMenu}
              >
                {t.footer.linkThree}
              </a>
            </li>
            <li className="off-screen-menu-item">
              <a
                href="#testimonials"
                className="off-screen-menu-link"
                onClick={toggleMenu}
              >
                {t.footer.linkFour}
              </a>
            </li>
            <li className="off-screen-menu-item">
              <a
                href="#gallery"
                className="off-screen-menu-link"
                onClick={toggleMenu}
              >
                {t.footer.linkFive}
              </a>
            </li>
            <li className="off-screen-menu-item">
              <a
                href="#faq"
                className="off-screen-menu-link"
                onClick={toggleMenu}
              >
                {t.footer.linkSix}
              </a>
            </li>
            <li className="off-screen-menu-item">
              <a
                href="#contact"
                className="off-screen-menu-link"
                onClick={toggleMenu}
              >
                {t.footer.linkSeven}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
