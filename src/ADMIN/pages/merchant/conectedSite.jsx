import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import "./merchant.scss";
import Table from "../../components/table/table";
import Dropdown from "../../../ui/dropdown/dropdown";

const ConnectedSite = () => {
  const currencies = [
    { label: "USDT", value: "USDT" },
    { label: "BTC", value: "BTC" },
    { label: "ETH", value: "ETH" },
    { label: "TON", value: "TON" },
  ];

  const periods = [
    { label: "today", value: "today" },
    { label: "This week", value: "This week" },
    { label: "This month", value: "This month" },
    { label: "Custom range", value: "Custom range" },
  ];

  const data = [
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON > USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
    {
      time: "15:35",
      merchant: "NixonUp",
      uuid: "89a4532-345c-59045",
      pair: "TON",
      status: "PAID",
      amount: " 13,8 TON",
      currency: "2 TON",
    },
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON > USDT",
      status: "WAIT",
      amount: "138",
      currency: "$2",
    },
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON > USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },

    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON > USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON > USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON > USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON > USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON > USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
  ];

  return (
    <section className="merchant-section">
      <div className="admin-container">
        <AdminHeader />

        <div className="conected-site-titles admin-arrow-title  G-align-start">
          <Link className="icon icon-arrowLeft2" to="/finish"></Link>
          <div>
            <p>BalanceUp</p>
            <span>balanceup.ru</span>
          </div>
        </div>

        <div className="c-site-tabs G-align-center">
          <button className="active">General</button>
          <button>Integrations</button>
          <button>Widgets</button>
        </div>

        <div className="c-site-wrapper G-flex">
          <div className="c-site-tolls">
            <div className="c-site-name">
              <h3>Name</h3>
              <label>
                <input type="text" placeholder="" value={"BalanceUp"} />
                <i className="icon icon-edit"></i>
              </label>
            </div>

            <div className="c-site-info">
              <div className="turnover">
                <span>Live turnover</span>
                <p>$12,230.00</p>
              </div>
              <div className="c-site-statistics">
                <h3 className="c-site-title">Statistics</h3>

                <div className="site-statistics-items  G-align-center">
                  <div className="site-statistics-item">
                    <p>Conversion</p>
                    <span>32%</span>
                  </div>
                  <div className="site-statistics-item">
                    <p>Exchanges</p>
                    <span>354</span>
                  </div>
                  <div className="site-statistics-item">
                    <p>Succesful exchanges</p>
                    <span>23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="c-site-descr">
            <div className="exchange-dashboard-period">
              <p>Turnover</p>

              <Dropdown
                items={periods}
                defaultValue="today"
                label=""
                className="balance-filter__period"
                iconClass="icon-arrowDown2"
              />
            </div>

            <div className="exchange-dashboard-earned G-align-center">
              <p>$1,230.00</p>

          

                  <Dropdown
                items={currencies}
                defaultValue="USDT"
                label=""
                className="balance-filter__period"
                iconClass="icon-arrowDown2"
              />
            </div>

            <div className="s-dashboard-list">
              <div className="s-dashboard-header ">
                <p>Exchanges</p>
              </div>

              <div className="s-dashboard-table">
                <Table data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedSite;
