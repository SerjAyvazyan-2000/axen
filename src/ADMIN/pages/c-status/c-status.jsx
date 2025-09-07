import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import "./c-status.scss";
import { useState } from "react";
import Button from "../../../ui/button/button";

const ConclusionStatus = () => {
  const [status, setStatus] = useState("success");

  return (
    <section className="conclusion-status-section">
      <div className="admin-container">
        <AdminHeader />

        {status === "success" && (
          <div className="c-success-titles ">
            <h3>Success!</h3>
            <p>
              The currency will be credited to your wallet within 2-5 minutes.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="c-error-titles ">
            <h3>Oops!</h3>
            <p>Unable to withdraw funds</p>
          </div>
        )}

        <div className="conclusion-status-cnt">
          {status === "success" && (
            <>
              <div className="c-success-rows G-flex-column">
                <div className="c-success-row">
                  <p>Transaction number:</p>
                  <span>#SP-2024-001234</span>
                </div>
                <div className="c-success-row">
                  <p>Coin:</p>
                  <span>USDT</span>
                </div>

                <div className="c-success-row">
                  <p>Wallet Address:</p>
                  <span>TR7NH.....gjLj6t</span>
                </div>
              </div>
              <div className="c-success-total">
                <p>Amount:</p>
                <span>25 USDT</span>
              </div>
              <Button variant={"gray-btn"} text={"Okay"} />
            </>
          )}

          {status === "error" && (
            <>
              <div className="c-error-rows G-flex-column">
                <div className="c-error-row">
                  <p>Error code:</p>
                  <span>ERR_ADDRESS</span>
                </div>
                <div className="c-error-row">
                  <p>Description:</p>
                  <span>Invalid address</span>
                </div>

                <div className="c-error-row">
                  <p>Wallet Address:</p>
                  <b>TR7NH.....gjLj6t</b>
                </div>

                <div className='c-error-tags G-flex-column'>
                    <p>What to do:</p>
                    <ul>
                      <li>Check the wallet address for correctness</li>
                      <li>Try a different wallet address</li>
                      <li>Contact <Link to='/'>support</Link>  </li>
                    </ul>
                </div>

              </div>
     
              <Button variant={"gray-btn"} text={"Try again"} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConclusionStatus;
