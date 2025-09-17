import { NavLink } from "react-router-dom";
import "./crypto-calculator.scss";
import Button from "../../../ui/button/button";
import SelectCurrency from "../select-currency/select-currency";
import { useState } from "react";

const CryptoCalculator = () => {
  const [active, setActive] = useState(false);
  const [sendAmount, setSendAmount] = useState("");
  const [getAmount, setGetAmount] = useState("");

  const [currencySections, setCurrencySections] = useState([
    {
      title: "Popular",
      items: [
        {
          img: "/eth-icon",
          name: "ETH",
          text: "Bitcoin",
          tag: "BSC",
          price: 68000,
        },
        {
          img: "/icon-crypto",
          name: "BTC",
          text: "Etherium",
          price: 2600,
          tag: "ETH",
        },
        { img: "/icon-crypto2", name: "XBY", text: "XTRABYTES", price: 58000 },

        {
          img: "/icon-crypto3",
          name: "BTC",
          text: "Etherium",
          price: 2600,
          tag: "ETH",
        },
        {
          img: "/USDT",
          name: "USDT",
          text: "Tether USD (Ethereum)",
          tag: "ETH",
        },
        {
          img: "/icon-crypto",
          name: "BTCB",
          text: "Bitcoin Standard Hashrate Token",
          tag: "BSC",
        },
      ],
    },
    {
      title: "Stablecoins",
      items: [
        {
          img: "/icon-crypto",
          name: "Bitcoin",
          price: 68000,
          text: "Bitcoin",
          tag: "Tag",
        },
        {
          img: "/icon-crypto",
          name: "Bitcoin",
          price: 68000,
          text: "Bitcoin",
          tag: "Tag",
        },
        {
          img: "/icon-crypto",
          name: "Bitcoin",
          price: 68000,
          text: "Bitcoin",
          tag: "Tag",
        },
      ],
    },
  ]);
  const [fromCurrency, setFromCurrency] = useState(
    currencySections[0].items[0]
  );
  const [toCurrency, setToCurrency] = useState(currencySections[0].items[1]);

  const [selecting, setSelecting] = useState(null); 


  const rate =
    fromCurrency.price && toCurrency.price
      ? fromCurrency.price / toCurrency.price
      : 0;


  const swapTokens = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    if (sendAmount) {
      const num = parseFloat(sendAmount);
      setGetAmount((num * (toCurrency.price / fromCurrency.price)).toFixed(6));
    }
  };

  const handleSendChange = (value) => {
    setSendAmount(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setGetAmount((num * rate).toFixed(6));
    } else {
      setGetAmount("");
    }
  };

  const handleGetChange = (value) => {
    setGetAmount(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setSendAmount((num / rate).toFixed(6));
    } else {
      setSendAmount("");
    }
  };

  const handleSelectCurrency = (variant) =>{
    setActive(!active)
     setSelecting(variant);
  }




  return (
    <div className="exchange-calculator-block">
      <div className="exchange-row G-align-center">
        <div className="exchange-col">
          <p className="exchange-label">You send</p>
          <input
            value={sendAmount}
            autoComplete="off "
            onChange={(e) => handleSendChange(e.target.value)}
            type="number"
            name="send"
          />
        </div>

        <button
          onClick={()=>handleSelectCurrency('send')}
          className="exchange-token-btn G-align-center"
        >

          <img src={`${fromCurrency.img}.svg`} alt={fromCurrency.name} />
          <span>{fromCurrency.name}</span>
          <i className="icon icon-arrowDown"></i>
        </button>
      </div>

      <div className="exchange-rate G-align-center">
        <p>
          Estimated rate: 1 {fromCurrency.name} ~ {rate.toFixed(6)}{" "}
          {toCurrency.name} <span>No hidden fees</span>
        </p>

        <div onClick={swapTokens} className="compare-bg G-center">
          <i className="icon icon-repeat"></i>
        </div>

        <div className="exchange-rate-decor">
          <img src="/rate-decor.png" alt="" />
        </div>
      </div>

      <div className="exchange-row G-align-center">
        <div className="exchange-col">
          <p className="exchange-label">You get</p>
          <input
            onChange={(e) => handleGetChange(e.target.value)}
            autoComplete="off"
            value={getAmount}
            type="number"
            name="get"
          />
        </div>

        <button
          onClick={()=>handleSelectCurrency('get')}
          className="exchange-token-btn G-align-center"
        >
           <img src={`${toCurrency.img}.svg`} alt={toCurrency.name} />
          <span>{toCurrency.name}</span>
          <i className="icon icon-arrowDown"></i>
        </button>
      </div>

      <div className="exchange-btn">
        <Button variant={"primary-btn"} text={"Exchange"} />
      </div>

      <SelectCurrency
        currencySections={currencySections}
        setActive={setActive}
        active={active}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        setFromCurrency={setFromCurrency}
        selecting={selecting}
      />
    </div>
  );
};

export default CryptoCalculator;
