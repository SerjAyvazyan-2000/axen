import { useEffect, useMemo, useRef, useState } from "react";
import './dropdown.scss'

export default function Dropdown({
  items,
  value,               
  defaultValue,          
  onChange,              
  label,                 
  className = "", 
  iconClass
         

}) {
  const wrapRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [inner, setInner] = useState(
    defaultValue ?? (Array.isArray(items) && items.length ? getVal(items[0]) : "")
  );

  function getVal(it) { return typeof it === "string" ? it : it?.value ?? it?.label ?? ""; }
  function getLabel(it) { return typeof it === "string" ? it : it?.label ?? it?.value ?? ""; }

  const currentValue = value !== undefined ? value : inner;

  const currentLabel = useMemo(() => {
    const found = items.find(it => getVal(it) === currentValue);
    return found ? getLabel(found) : currentValue;
  }, [items, currentValue]);



  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  const pick = (val) => {
    if (value === undefined) setInner(val);   
    onChange && onChange(val);
    close();
  };


  useEffect(() => {
    const onDocClick = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);



  return (
    <div
      ref={wrapRef}
      className={`dropdown-wrapper ${open ? "open" : ""} ${className}`}
    >
      <button className={`dropdown-toggle G-align-center`} onClick={toggle}>
        {label ? <b>{label}</b> : null}
        <span>{currentLabel}</span>
        <i className={`icon ${iconClass}`} />
      </button>

      <ul className={`dropdown-menu `}>
        {items.map((it) => {
          const val = getVal(it);
          const lab = getLabel(it);
          const active = val === currentValue;
          return (
            <li
              key={val}
              className={`dropdown__item  ${active ? "is-active" : ""}`}
              onClick={() => pick(val)}
            >
              {lab}
            </li>
          );
        })}
      </ul>
    </div>
  );
}