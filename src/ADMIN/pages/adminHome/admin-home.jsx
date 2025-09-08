import Button from "../../../ui/button/button";
import Dropdown from "../../../ui/dropdown/dropdown";
import AdminHeader from "../../components/adminHeader/adminHeader";
import Search from "../../components/search/search";
import Stats from "../../components/stats/stats";
import Table from "../../components/table/table";
import "./admin-home.scss";
import {Link} from 'react-router-dom'

const AdminHome = () => {
  const data = [
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON → USDT",
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
      amount: "13,8",
      currency: "Credited 2 TON",
    },
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON → USDT",
      status: "WAIT",
      amount: "138",
      currency: "$2",
    },
    {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON → USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
      {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON → USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
      {
      time: "15:35",
      merchant: "BalanceUp",
      uuid: "89a4532-345c-59045",
      pair: "TON → USDT",
      status: "PAID",
      amount: "138",
      currency: "$2",
    },
  ];

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

  const statsData = [
    { label: "Conversion", value: "32%" },
    { label: "Exchanges", value: "354" },
    { label: "Succesful exchanges", value: "23" },
    { label: "Daily turnover", value: "$12,230.00" },
  ];

  return (
    <section className="admin-home-section">
      <div className="admin-container">
        <AdminHeader />

        <div className="exchange-dashboard">
          <div className="exchange-dashboard-header G-align-start">
            <div className="exchange-dashboard-summary G-flex-column">
              <div className="exchange-dashboard-period">
                <p>Earned</p>

                <Dropdown
                  items={periods}
                  defaultValue="today"
                  label=""
                  className="balance-filter__period"
                  iconClass='icon-arrowDown2'
                  
                />
              </div>

              <div className="exchange-dashboard-earned G-align-center">
                <p>$1,230.00</p>

                <Dropdown
                  items={currencies}
                  defaultValue="USDT"
                  label=""
                  className="balance-filter__currencies"
                  iconClass='icon-arrowDown2'
                />
              </div>

              <Link to="/conclusion" className="exchange-withdraw G-align-center">
                <i className="icon icon-iconBackward"></i>
                <span>Withdraw</span>
              </Link>
            </div>

            <Stats items={statsData} />
          </div>

          <div className="exchange-dashboard-content">
            <div className="exchange-dashboard-search">
              <Search placeholder={"Search by UUID, wallet"} />
            </div>

            <div className="exchange-dashboard-exchanges G-align-start">
              <div className="e-dashboard-list">
                <div className="e-dashboard-header ">
                  <p>Exchanges</p>
                  <Link to={'/history'}>
                    <i className="icon icon-iconBackward"></i>
                    <span>View all</span>
                  </Link>
                </div>

                <div className="e-dashboard-table">
                  <Table data={data} />
                </div>
              </div>

              <aside className="e-dashboard-merchants">
                <div className="e-dashboard-header ">
                  <p>Merchants</p>
                  <Link to={'/merchant'}>
                    <i className="icon icon-iconBackward"></i>
                    <span>View all</span>
                  </Link>
                </div>

                <div className="merchants-items">
                  <div className="merchant-item">
                    <div className="m-item-titles">
                      <h3>BalanceUp</h3>
                      <a
                        target="blank"
                        href="https://perfectdomain.com/domain/balanceup.com"
                      >
                        balanceup.com
                      </a>
                    </div>
                    <a
                      className="m-item-logo"
                      href="https://perfectdomain.com/domain/balanceup.com"
                    >
                      <img src="./Avatar.svg" alt="" />
                    </a>
                  </div>

                  <div className="merchant-item">
                    <div className="m-item-titles">
                      <h3>WallUp</h3>
                      <a target="blank" href="wallup.com">
                        wallup.com
                      </a>
                    </div>
                    
                    <a className="m-item-logo" href="wallup.com">
                      <img src="./Avatar.svg" alt="" />
                    </a>
                  </div>

                  <div className="merchant-item">
                    <div className="m-item-titles">
                      <h3>SeeUp</h3>
                      <a target="blank" href="Seeup.com">
                        Seeup.com
                      </a>
                    </div>
                    
                    <a className="m-item-logo" href="Seeup.com">
                      <img src="./Avatar.svg" alt="" />
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
