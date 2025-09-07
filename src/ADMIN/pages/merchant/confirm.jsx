import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import "./merchant.scss";
import Steps from "./steps";
import { useState } from "react";
import Button from "../../../ui/button/button";

const Confirm = () => {
  const [status, setStatus] = useState("pending");

  const handleCheck = () => {
    setStatus("error");
  };

  return (
    <section className="merchant-section">
      <div className="admin-container">
        <AdminHeader />

        <h2 className="admin-section-title admin-arrow-title G-align-center">
          {status === "pending" && (
            <>
              <Link className="icon icon-arrowLeft2" to="/siteConnect"></Link>
              <span>Confirm that you are the owner</span>
            </>
          )}


          {status === "error" && (
            <span>
              <b className="title-error-text">Ops!</b> The site has not been
              added.
            </span>
          )}
        </h2>

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
          curent={2}
          error={status === "error"}
          
        />
        <div className="confirm-descr">
          {status === "pending" && (
            <div className="confirm-tolls">
              <h3>
                Add the following code inside the &lt;head /&gt; tag of your
                website's main page:
              </h3>
              <div className="confirm-copy-block G-align-center">
                <p>&lt;meta name="axen" content="f1be13f9" /&gt;</p>
                <i className="icon icon-iconCopy"></i>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="confirm-tolls">
              <h3>
                You may not have added the following code inside the
                &lt;head/&gt; tag of your website's main page, or access to it
                is restricted. Please try again.
              </h3>
              <div className="confirm-copy-block G-align-center">
                <p>&lt;meta name="axen" content="f1be13f9" /&gt;</p>
                <i className="icon icon-iconCopy"></i>
              </div>
            </div>
          )}

          <div className="confirm-btn-wrapper">
            {status === "pending" && <p>Check that the domain is verified:</p>}

            <div className="confirm-btns">
              {status === "pending" && (
                <Button
                  onClick={handleCheck}
                  href={false}
                  variant={"primary-btn"}
                  text={"Check"}
                />
              )}

              {status === "error" && (
                <>
                  <Button
                    onClick={() => setStatus("pending")}
                    href={false}
                    variant={"primary-btn"}
                    text={"Try check"}
                  />
                  <Button
                    href={false}
                    variant={"gray-btn"}
                    text={"Close"}
                    onClick={() => setStatus("pending")}
                  />
                </>
              )}

          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
