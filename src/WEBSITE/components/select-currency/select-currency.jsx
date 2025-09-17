import { NavLink } from "react-router-dom";
import "./select-currency.scss";
import { useState,useRef,useEffect } from "react";

const SelectCurrency = ({currencySections, active, setActive,fromCurrency,toCurrency,setToCurrency,setFromCurrency,selecting}) => {
  const filters = ["All", "New", "Gainers", "Losers"];
  const [activeFilter, setActiveFilter] = useState("All");
  const wrapRef = useRef(null);

  console.log(currencySections);
  


   useEffect(() => {
      function handleClickOutside(e) {
        if (
          wrapRef.current &&
          !wrapRef.current.contains(e.target)
        ) {
          setActive(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setActive]);



  return (
    <div ref={wrapRef} className={`select-currency-block ${active ? "active" : ""}`}>
      <div className="select-currency-header">
        <div className="currency-header-info G-align-center">
          <p>Select a currency</p>
          <i onClick={() => setActive(false)} className="icon icon-close"></i>
        </div>

        <div className="s-currency-tolls">
          <label className="s-currency-search">
            <input placeholder={"Type a currency"} type="text" />
            <i className="icon icon-search2"></i>
          </label>

          <div className="s-currency-filters G-align-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "active" : ""}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="currency-scroll">
        <div className="currency-list">
          {currencySections.map((section, idx) => (
            <div key={idx}   className="currency-box">
              <h3 className="currency-title">{section.title}</h3>

              <div className="currency-items">
                {section.items.map((item, i) => (
                  <div key={i}  onClick={() => {
                if (selecting === "send") {
                  setFromCurrency(item);
                } else if (selecting === "get") {
                  setToCurrency(item);
                }
                setActive(false); 
              }} className="currency-item" >
                    <div className="currency-left">
                      <div className="currency-icon">
                        <img src={`${item.img}.svg`} alt={item.name} />
                      </div>
                      <div className="currency-info">
                        <div className="currency-symbol G-flex">
                          <p>{item.name}</p>

                          {item.tag && (
                            <span
                              className={`currency-tag ${item.tag.toLowerCase()}`}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <span className="currency-name">{item.text}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCurrency;
