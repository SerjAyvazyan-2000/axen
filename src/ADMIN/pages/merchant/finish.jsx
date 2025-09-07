import { Link } from "react-router-dom";
import Button from "../../../ui/button/button";
import AdminHeader from "../../components/adminHeader/adminHeader";
import "./merchant.scss";
import Steps from "./steps";
import Input from "../../../ui/input/input";
import { useState } from "react";

const Finish = () => {
  const [status, setStatus] = useState("pending");

  return (
    <section className="merchant-section">
      <div className="admin-container">
        <AdminHeader />

        {status === "pending" && (
          <h2 className="admin-section-title admin-arrow-title G-align-center">
            <Link className="icon icon-arrowLeft2" to="/confirm"></Link>
            <span>Please provide contact details</span>
          </h2>
        )}

        {status === "success" && (
          <h2 className="admin-section-title admin-arrow-title G-align-center">
            <span className="success-title">
           Your checkout is under review
            </span>
          </h2>
        )}

        <Steps
          steps={[
            {
              number: 1,
              to: "/siteConnect",
            },
            {
              number: 2,
              to: "/confirm",
            },
            {
              number: 3,
              to: "/finish",
            },
          ]}
          curent={3}
          success={status === 'success'}
        />

        {status === "pending" && (
          <form className="finish-form G-flex-column">
            <Input
              className={""}
              type={"text"}
              title="E-mail"
              required={true}
              variant={"gray-input"}
              name={"site"}
              placeholder={"example@mail.com"}
              error={false}
            />

            <Input
              className={""}
              type={"email"}
              title="Telegram"
              required={true}
              variant={"gray-input"}
              name={"telegram"}
              placeholder={"@user"}
              error={false}
            />
          </form>
        )}

        <div className="finish-btn">
          {status === "pending" && <p>Check that the domain is verified:</p>}

          {status === "pending" && (
            <Button
              href={false}
              onClick={() => setStatus("success")}
              variant={"gray-btn"}
              text={"Check"}
            />
          )}

          {status === "success" && (
            <div className="f-success-btn">
              <Button
                href={"/connectedSite"}
                variant={"primary-btn"}
                text={"Done"}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Finish;
