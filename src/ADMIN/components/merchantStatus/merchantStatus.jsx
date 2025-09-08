import { useState, useEffect, useRef } from "react";
import "./merchantStatus.scss";

export default function MerchantStatus() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("ACTIVE");
  const dropRef = useRef(null);

  const toggle = () => setOpen(!open);

  const changeStatus = (newStatus) => {
    setStatus(newStatus);
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={dropRef}
      className={`merchant-status ${open ? "open" : ""}`}
    >
      <button
        className={`merchant-status__btn merchant-status__btn--${status.toLowerCase()}`}
        onClick={toggle}
      >
        <span>{status}</span> <i className="icon icon-arrowDown"></i>
      </button>

      <ul className="merchant-status__menu">
        {["ACTIVE", "INACTIVE"].map((s) => (
          <li
            key={s}
            className="merchant-status__option"
            onClick={() => changeStatus(s)}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}