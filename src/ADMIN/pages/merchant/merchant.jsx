import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import Search from "../../components/search/search";
import "./merchant.scss";
import MerchantStatus from "../../components/merchantStatus/merchantStatus";

const Merchant = () => {
  return (
    <section className="merchant-section">
      <div className="admin-container">
        <AdminHeader />

        <h2 className="admin-section-title">Merchant</h2>
        <div className="merchant-search">
          <Search placeholder="Search ID, Name, Link..." />
        </div>

        <div className="add-merchants-block G-flex">
          <div className="added-merchant">
            <div className="added-item-titles">
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
            <MerchantStatus />
          </div>

            <Link to={"/siteConnect"} className="added-tolls G-center">
              <b className="add-icon G-center">
                <i className="icon icon-iconPlus"></i>
              </b>
              <span>Add</span>

            </Link>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
