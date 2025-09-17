import { NavLink, Link, useLocation } from "react-router-dom";
import "./desktopMenu.scss";
import { useEffect, useRef, useState } from "react";

const DesktopMenu = ({ setOpenDesktopMenu, openDesktopMenu }) => {
  const wrapRef = useRef(null);
  const location = useLocation();
 
  

  const [activeIndexes, setActiveIndexes] = useState([0]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        wrapRef.current &&
        !wrapRef.current.contains(e.target) &&
        !e.target.closest(".d-menu-btn")
      ) {
        setOpenDesktopMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenDesktopMenu]);

  const desktopMenuItems = [
    {
      title: "For business",
      elements: [
        {
          name: "API",
          icon: "icon-code",
          href: "/home",
          iconColor: "i-code-color",
          alsoActive: ["/"],
        },
        {
          name: "Affiliate",
          icon: "icon-users",
          href: "/affiliate",
          iconColor: "i-users-color",
        },
      ],
    },
    {
      title: "Crypto pair",
      elements: [
        {
          name: "Exchange a pair",
          icon: "icon-exchange",
          href: "/exchange",
          iconColor: "i-exchange-color",
        },
      ],
    },
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
    <div
      ref={wrapRef}
      className={`d-menu-box ${openDesktopMenu ? "active" : ""}`}
    >
      <div className="d-menu-header G-align-center">
        <Link to={"/"} className="G-flex">
          <img src="/logo.svg" alt="" />
        </Link>

        <div
          onClick={() => setOpenDesktopMenu(false)}
          className={`d-burger-close ${openDesktopMenu ? "active" : ""}`}
        >
          <span></span>
        </div>
      </div>

      <div className="d-menu-items G-flex-column">
        {desktopMenuItems.map((item, index) => {
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
                  const isActive =
                    location.pathname === element.href ||
                    (element.alsoActive &&
                      element.alsoActive.includes(location.pathname));
                  return (
                    <NavLink
                      to={element.href}
                      key={idx}
                   
                      className={`d-sub-item G-align-center ${
                        isActive ? "active" : ""
                      } `}
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
  );
};

export default DesktopMenu;
