import { useEffect, useState } from "react";
import "./header.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [changeLan, setChangeLan] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [active, setActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  const navItems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Affiliate",
      to: "/affiliate",
    },
    { name: "FAQ", to: "/#faq" },
    { name: "Contact us", to: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [active]);

  const handleActive = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(-1);
    }
  };

  return (
    <header className={`${scrolled ? "moved" : ""}`}>
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
                    <li>
                      <NavLink
                        className={`${
                          location?.pathname === "/" ? "active" : ""
                        }`}
                        to={"/"}
                        onClick={() => {
                          if (window.innerWidth <= 991) {
                            setActive(false);
                          }
                        }}
                      >
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={`${
                          location?.pathname === "/affiliate" ? "active" : ""
                        }`}
                        to={"/affiliate"}
                        onClick={() => {
                          if (window.innerWidth <= 991) {
                            setActive(false);
                          }
                        }}
                      >
                        Affiliate
                      </NavLink>
                    </li>

                    <li>
                      <a
                        href="#faq"
                        onClick={(e) => {
                          if (window.innerWidth <= 991) {
                            setActive(false);
                          }

                          if (location.pathname === "/") {
                            return;
                          } else {
                            navigate("/#faq");
                          }
                        }}
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        onClick={() => {
                          if (window.innerWidth <= 991) {
                            setActive(false);
                          }
                        }}
                      >
                        Contact us
                      </a>
                    </li>
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
