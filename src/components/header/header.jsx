import { useEffect, useState } from "react";
import "./header.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [changeLan, setChangeLan] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [active, setActive] = useState(false);

  const navItems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Affiliate",
      to: "/affiliate",
    },
    {
      name: "FAQ",
      to: "/faq",
    },
    {
      name: "Contact us",
      to: "/contact",
    },
  ];

  const languages = [
    { code: "ru", name: "Русский", icon: "./ru.png" },
    { code: "en", name: "English", icon: "./en.png" },
    { code: "fr", name: "Français", icon: "./FR.png" },
    { code: "es", name: "Español", icon: "./es.png" },
    { code: "zh", name: "中文", icon: "./ki.png" },
    { code: "ar", name: "العربية", icon: "./ir.png" },
  ];

  const handleChangeLan = () => {
    setChangeLan(!changeLan);
  };
  const handleOpenMenu = () => {
    setActive(!active);
  };

  const handleActive = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(-1);
    }
  };

  return (
    <header>
      <div className="container">
        <div className="header-body G-align-center">
          <Link className="header-logo G-flex" to={"/"}>
            <img src="/logo.svg" alt="logo" />
          </Link>

          {navItems.length ? (
            <>
              <nav className={`header-nav-menu ${active ? "active" : ""}`}>
                
                <div className="header-nav-wrapper G-flex-column">

                  <button className="header-login mobile-block">Sign in</button>

                  <ul>
                    {navItems.map((item, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className={`${
                              location?.pathname === item.to ? "active" : ""
                            }`}
                            to={item.to}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="header-languages-wrapper mobile-block">
                    <p className="language-mobile-title">Language</p>
                    <div
                      onClick={handleChangeLan}
                      className={`header-languages G-align-center ${
                        changeLan ? "open" : ""
                      }`}
                    >
                      <div className="language-flag G-flex">
                        <img src="/en.png" alt="" />
                      </div>
                      <p>EN</p>
                      <i className="icon icon-arrowDown"></i>
                    </div>

                    <div
                      className={`sub-languages-block G-flex-column ${
                        changeLan ? "active" : ""
                      }`}
                    >
                      {languages.map((lang, idx) => (
                        <div
                          onClick={() => handleActive(idx)}
                          key={idx}
                          className={`sub-languages G-align-center ${
                            activeIndex === idx ? "active" : ""
                          }`}
                        >
                          <div className="sub-language-flag G-flex">
                            <img src={lang.icon} alt={lang.name} />
                          </div>
                          <p>{lang.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>


                </div>

              </nav>
            </>
          ) : null}

          <div className="header-actions G-align-center desktop-block">
            <button className="header-login">Sign in</button>
            <button className="header-register">Start Integration</button>

            <div className="header-languages-wrapper">
              <div
                onClick={handleChangeLan}
                className={`header-languages G-align-center ${
                  changeLan ? "open" : ""
                }`}
              >
                <div className="language-flag G-flex">
                  <img src="/en.png" alt="" />
                </div>
                <p>EN</p>
                <i className="icon icon-arrowDown"></i>
              </div>

              <div
                className={`sub-languages-block G-flex-column ${
                  changeLan ? "active" : ""
                }`}
              >
                {languages.map((lang, idx) => (
                  <div
                    onClick={() => handleActive(idx)}
                    key={idx}
                    className={`sub-languages G-align-center ${
                      activeIndex === idx ? "active" : ""
                    }`}
                  >
                    <div className="sub-language-flag G-flex">
                      <img src={lang.icon} alt={lang.name} />
                    </div>
                    <p>{lang.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="header-register mobile-block">Earn</button>

          <div
            className={`burger ${active ? "active" : ""}`}
            onClick={() => handleOpenMenu()}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
