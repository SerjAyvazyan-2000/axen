import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import Search from "../../components/search/search";
import "./statistics.scss";
import Select from "../../../ui/select/select";
import Dropdown from "../../../ui/dropdown/dropdown";
import Stats from "../../components/stats/stats";
import Table from "../../components/table/table";

const Statistics = () => {
  const sites = [
    { label: "balanceup.com", value: "balanceup" },
    { label: "myshop.com", value: "myshop" },
    { label: "axen.io", value: "axen" },
  ];

  const periods = [
    { label: "Today", value: "Today" },
    { label: "This week", value: "This week" },
    { label: "This month", value: "Custom range" },
  ];

  const handleSelect = (option) => {
    console.log("Выбран:", option);
  };

  const currencies = [
    { label: "USDT", value: "USDT" },
    { label: "BTC", value: "BTC" },
    { label: "ETH", value: "ETH" },
    { label: "TON", value: "TON" },
  ];

  const statsData = [
    { label: "Conversion", value: "32%" },
    { label: "Exchanges", value: "354" },
    { label: "Succesful exchanges", value: "23" },
  ];

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
      amount: " 13,8 TON",
      currency: "2 TON",
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
  ];

  return (
    <section className="statistics-section">
      <div className="admin-container">
        <AdminHeader />

        <h2 className="admin-section-title">Statistics</h2>

        <div className="statistic-selects G-align-center">
          <Select
            options={sites}
            placeholder="balanceup.co..."
            onChange={handleSelect}
            title={"Merchant"}
          />

          <Select
            options={periods}
            placeholder="Today"
            onChange={handleSelect}
            title={"Period"}
          />
        </div>

        <div className="statistic-dashboard-header G-align-start">
          <div className="statistic-dashboard-summary G-flex-column">
            <div className="statistic-dashboard-period">
              <p>Earned</p>
            </div>

            <div className="statistic-dashboard-earned G-align-center">
              <p>$1,230.00</p>

              <Dropdown
                items={currencies}
                defaultValue="USDT"
                label=""
                className="statistic-dropdown-currencies"
                iconClass={'icon-arrowDown2'}
              />
            </div>
          </div>

          <Stats items={statsData} />
        </div>

        <div className="statistic-search">
          <Search placeholder={"Search ID, Name, Descriptions, Check"} />
        </div>

        <div className="statistics-tables G-flex-column">
          <div className="statistic-table-block">
            <h3>Today</h3>

            <Table data={data}  className={'statistic-table'} />
          </div>

          <div className="statistic-table-block">
            <h3>July 24th</h3>

            <Table data={data} className={'statistic-table'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
