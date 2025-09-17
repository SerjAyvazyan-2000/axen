import { useEffect, useState } from "react";
import "./header.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import DesktopMenu from "../desktopMenu/desktopMenu";

const Header = ({ hidenAuthentication }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [changeLan, setChangeLan] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(false);
  const [activeIndexes, setActiveIndexes] = useState([0]);

  const isAuth = Boolean(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(active);
  }, [active]);
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
    handleChangeLan();
    if (window.innerWidth <= 991) {
      setActive(false);
    }
  };

  const navitems = [
    {
      name: "Exchange",
      href: "exchange",
      alsoActive: ["/"],
    },
    {
      name: "API",
      href: "api",
    },
    {
      name: "Affiliate",
      href: "affiliate",
    },
  ];

  const mobileMenuItems = [
    {
      title: "For business",
      elements: [
        {
          name: "API",
          icon: "icon-code",
          href: "/api",
          iconColor: "i-code-color",
        },
        {
          name: "Affiliate",
          icon: "icon-users",
          href: "/affiliate",
          iconColor: "i-users-color",
        },
      ],
    },
    // {
    //   title: "Crypto pair",
    //   elements: [
    //     {
    //       name: "Exchange a pair",
    //       icon: "icon-exchange",
    //       href: "/exchange",
    //       iconColor: "i-exchange-color",
    //       alsoActive: ["/"],
    //     },
    //   ],
    // },
  ];

  const handleClick = (index) => {
    setActiveIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <>
      <header className={`${scrolled ? "moved" : ""}`}>
        <div className="header-container">
          <div className="header-body G-align-center">
            <div
              onClick={() => setOpenDesktopMenu((prev) => !prev)}
              className="d-menu-btn G-align-center"
            >
              <div
                className={`desktop-burger ${openDesktopMenu ? "active" : ""}`}
              >
                <span></span>
              </div>
              <p>Menu</p>
            </div>

            <Link
              onClick={() => setActive(false)}
              className="header-logo G-flex"
              to={"/"}
            >
              <img src="/logo.svg" alt="logo" />
            </Link>

            <nav className={`header-nav-menu ${active ? "active" : ""}`}>
              <div className="header-nav-wrapper G-flex-column">
                {!hidenAuthentication && (
                  <button className="header-login mobile-block">Sign in</button>
                )}

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
                <ul>
                  {navitems
                    .filter((item) => {
                      if (
                        window.innerWidth <= 991 &&
                        ["API", "Affiliate"].includes(item.name)
                      ) {
                        return false;
                      }
                      return true;
                    })
                    .map((item, index) => {
                      const isActive =
                        location.pathname === item.href ||
                        (item.alsoActive &&
                          item.alsoActive.includes(location.pathname));
                      return (
                        <li key={index}>
                          <NavLink
                            to={item.href}
                            className={isActive ? "active" : ""}
                            onClick={() => {
                              if (window.innerWidth <= 991) {
                                setActive(false);
                              }
                            }}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    })}
                </ul>

                <div className="d-menu-items G-flex-column mobile-menu-block">
                  {mobileMenuItems.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`d-menu-item ${
                          activeIndexes.includes(index) ? "active" : ""
                        }`}
                      >
                        <div
                          onClick={() => handleClick(index)}
                          key={index}
                          className="d-item-titles G-align-center"
                        >
                          <p>{item.title}</p>
                          <i className={`icon icon-arrowDown `}></i>
                        </div>
                        <div className={"d-item-sub-block"}>
                          {item?.elements.map((element, idx) => {
                            return (
                              <NavLink
                                to={element.href}
                                key={idx}
                                className="d-sub-item G-align-center"
                                onClick={() => {
                                  if (window.innerWidth <= 991) {
                                    setActive(false);
                                  }
                                }}
                              >
                                <i
                                  className={`icon ${element.icon} ${element.iconColor}`}
                                ></i>
                                <p>{element.name}</p>
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </nav>

            <div className="header-actions G-align-center desktop-block">
              {!hidenAuthentication && (
                <>
                  <Link
                    to={`${isAuth ? "/adminHome" : "/sigIn"}`}
                    className="header-login"
                  >
                    Sign in
                  </Link>
                  <Link
                    to={`${isAuth ? "/adminHome" : "/signUp"}`}
                    className="header-register"
                  >
                    Start Integration
                  </Link>
                </>
              )}

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

            <div
              className={`burger ${active ? "active" : ""}`}
              onClick={() => handleOpenMenu()}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <DesktopMenu
        setOpenDesktopMenu={setOpenDesktopMenu}
        openDesktopMenu={openDesktopMenu}
      />
    </>
  );
};

export default Header;
