import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import "./profile.scss";
import Button from "../../../ui/button/button";
import Input from "../../../ui/input/input";
import MerchantStatus from "../../components/merchantStatus/merchantStatus";

const Profile = () => {
  return (
    <section className="profile-section">
      <div className="admin-container">
        <AdminHeader />

        <div className="profile-titles">
          <h2 className="admin-section-title">Hello</h2>
          <span>mail@main.com</span>
        </div>

        <div className="profile-block">
          <div className="profile-inputs G-flex-column">
            <Input
              variant={"gray-input"}
              name="email"
              title={"Email"}
              placeholder="example@mail.com"
              edit={true}
            />

            <Input
              variant={"gray-input"}
              name="telegram"
              title={"Telegram"}
              placeholder="example@mail.com"
              edit={true}
            />

            <Input
              variant={"gray-input"}
              name="telegram"
              title={"Password"}
              placeholder="****************"
              edit={true}
            />
          </div>

          <div className="withdraw-methods-block">
            <h2>Withdraw method</h2>


            <div className="withdraw-items G-flex">
              
              <div className="withdraw-item">
                <div className="w-item-info G-align-start">
                  <div className="w-item-titles">
                    <h3>Wallet</h3>
                    <p>TR7NHqjeKQxGTC...</p>
                  </div>
                  <div className="w-item-logo G-flex">
                    <img src="./coinLogo.svg" alt="" />
                  </div>
                </div>

                <div className="w-item-tolls G-align-end">
                  <div className="w-item-texts">
                    <p>Currency</p>
                    <h3>USDT TRC20</h3>
                  </div>

                  <MerchantStatus />
                </div>
              </div>

              <div className="withdraw-add-tolls G-center">
                <p>
                  contact <Link to='/conclusion'>your manager</Link> to connect a new wallet
                </p>
              </div>

            </div>


            <Button variant={"primary-btn"} text="Save" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
