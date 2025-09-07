import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import "./conclusion.scss";
import Dropdown from "../../../ui/dropdown/dropdown";
import Input from "../../../ui/input/input";
import Button from "../../../ui/button/button";

const Conclusion = () => {
  const currencies = [
    { label: "USDT", value: "USDT" },
    { label: "BTC", value: "BTC" },
    { label: "ETH", value: "ETH" },
    { label: "TON", value: "TON" },
  ];

  return (
    <section className="conclusion-section">
      <div className="admin-container">
        <AdminHeader />

        <div className="conclusion-dashboard-summary G-flex-column">
          <div className="conclusion-dashboard-period">
            <p>Available for withdrawal</p>
          </div>

          <div className="conclusion-dashboard-earned G-align-center">
            <p>$11,230.00</p>

            <Dropdown
              items={currencies}
              defaultValue="USDT"
              label=""
              iconClass="icon-arrowDown"
              className="statistic-dropdown-currencies"
            />
          </div>
        </div>

        <div className="conclusion-add-tolls">
          <div className="conclusion-method">
            <p className="method-title">Method</p>
            <div className="conclusion-method-tolls G-flex">
              <div className="c-method-dropdown">
                <Dropdown
                  items={currencies}
                  defaultValue="USDT"
                  iconClass="icon-arrowDown"
                  label=""
                  className="conclusion-dropdown-currencies"
                />
              </div>
              <label className="c-method-input">
                <input type="text" placeholder="Address" />
              </label>
            </div>
          </div>

          <div className="conclusion-amount">
            <div className="conclusion-amount-tolls G-align-end">

              <div className="c-amount-input">
                <Input
                  className={""}
                  type={"number"}
                  title="Amount"
                  required={false}
                  variant={"gray-input"}
                  name={"number"}
                  placeholder={"1,200"}
                  error={false}
                />
              </div>
              <div className='c-amount-button'>
                  <Button variant={"button-gradient"} text={"Withdraw"} />
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
