import { useState, useRef, useEffect } from "react";
import "./select.scss";

const Select = ({
  options = [],
  placeholder = "Select...",
  onChange,
  title,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const wrapperRef = useRef(null);

  const toggle = () => setOpen(!open);

  const choose = (option) => {
    setSelected(option);
    setOpen(false);
    onChange && onChange(option);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="custom-select-wrapper">
      {title && <h3>{title}</h3>}

      <div
        ref={wrapperRef}
        className={`custom-select ${open ? "open" : ""}`}
        onClick={toggle}
      >
        <div className={`custom-select__input ${open ? "active" : ""}`}>
          <span>{selected ? selected.label : placeholder}</span>
          <i className="icon icon-arrowDown"></i>
        </div>

        {open && (
          <ul className="custom-select__menu">
            {options.map((opt, idx) => (
              <li
                key={idx}
                className={`custom-select__item ${
                  selected?.value === opt.value ? "active" : ""
                }`}
                onClick={() => choose(opt)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
