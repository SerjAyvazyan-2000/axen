import { NavLink, useLocation } from "react-router-dom";
import "./sidebar.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(-1);
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Вы вышли из аккаунта ");
    navigate("/sigIn");
  };

  const sidebarMenu = [
    {
      icon: "icon-home",
      name: "Home",
      color: "aqua-item",
      href: "/adminHome",
    },
    {
      icon: "icon-dolar",
      name: "Merchant",
      color: "yellow-item",
      href: "/merchant",
      match: [
        "/merchant",
        "/siteConnect",
        "/confirm",
        "/finish",
        "/connectedSite",
      ],
    },
    {
      icon: "icon-statistics",
      name: "Statistics",
      color: "orange-item",
      href: "/statistics",
    },

    {
      icon: "icon-history",
      name: "History",
      color: "gray-item",
      href: "/history",
    },

    {
      icon: "icon-integration",
      name: "Integration",
      color: "blue-item",
      href: "/integration",
    },
  ];

  const sidebarTolls = [
    {
      icon: "icon-users",
      name: "Refferal",
      href: "/refferal",
      color: "aqua-item",
    },
    {
      icon: "icon-settings",
      name: "Profile",
      href: "/profile",
      color: "gray-item",
    },
    {
      icon: "icon-logout",
      name: "Logout",

      color: "gray-item",
      action: "logout",
    },
  ];

  return (
    <section className="sidebar-block">
      <nav className="sidebar-menu">
        <ul>
          {sidebarMenu.map((item, index) => {
            const isActive = item?.match?.some((path) =>
              location.pathname.startsWith(path)
            );
            return (
              <li key={index}>
                <NavLink
                  onClick={() => setActiveMenu(index)}
                  className={`${isActive ? "active" : ""} ${item.color}`}
              to={item.href}

                  to={`${item.href}`}
                >
                  <i className={`icon ${item.icon}`}></i>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="sidebar-tolls">
        <ul>
          {sidebarTolls.map((item, index) => (
            <li key={index}>
              {item.action === "logout" ? (
                <a className={` ${item.color}`} onClick={handleLogout}>
                  <i className={`icon ${item.icon}`}></i>
                  <span>{item.name}</span>
                </a>
              ) : (
                <NavLink className={`${item.color}`} to={item.href}>
                  <i className={`icon ${item.icon}`}></i>
                  <span>{item.name}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
