import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import Search from "../../components/search/search";
import "./history.scss";
import Select from "../../../ui/select/select";
import Dropdown from "../../../ui/dropdown/dropdown";
import Stats from "../../components/stats/stats";
import Table from "../../components/table/table";

const History = () => {
  const sites = [
    { label: "balanceup.com", value: "balanceup" },
    { label: "myshop.com", value: "myshop" },
    { label: "axen.io", value: "axen" },
  ];

  const periods = [
    { label: "Month", value: "Month" },
    { label: "This week", value: "This week" },
    { label: "This month", value: "Custom range" },
  ];

  const payments = [
    { label: "PAID", value: "PAID" },
    { label: "Unpaid", value: "Unpaid" },
  ];

  const handleSelect = (option) => {
    console.log("Выбран:", option);
  };

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
    <section className="history-section">
      <div className="admin-container">
        <AdminHeader />

        <h2 className="admin-section-title">History</h2>

        <div className="history-tolls G-align-end">
          <div className="history-selects G-align-center">
            <Select
              options={payments}
              placeholder="PAID"
              onChange={handleSelect}
              title={"Tag"}
            />
            <Select
              options={periods}
              placeholder="Month"
              onChange={handleSelect}
              title={"Period"}
            />

            <Select
              options={sites}
              placeholder="balancetrade.com"
              onChange={handleSelect}
              title={"Merchant"}
            />
          </div>

          <button className="export-btn G-align-center">
            <i className="icon icon-download"></i>
            <span>Export to Excel</span>
          </button>
        </div>

        <div className="history-search">
          <Search placeholder={"Search ID, Name, Descriptions, Check"} />
        </div>

        <div className="history-tables G-flex-column">
          <div className="history-table-block">
            <h3>Today</h3>

            <Table data={data} className={"history-table"} />
          </div>

          <div className="history-table-block">
            <h3>July 24th</h3>

            <Table className={"history-table"} data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
