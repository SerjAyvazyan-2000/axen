import { NavLink } from "react-router-dom";
import "./sigin.scss";
import Input from "../../../ui/input/input";
import Button from "../../../ui/button/button";

const Authentication = () => {
  return (
    <section className="authorization-section">
      <div className="authentication-container">
        <NavLink to={"/"} className=" G-center">
          <img src="/logo.svg" alt="" />
        </NavLink>

        <div className="authentication-body">
          <NavLink to={"/"} className="a-back-link G-align-center">
            <i className="icon icon-arrowLeft"></i>
            <span>Back</span>
          </NavLink>
          <div className="authentication-cnt">
            <div className="authentication-media">
              <h3 className="a-title">SIgn in</h3>

              <div className="authentication-qr G-flex">
                <img src="./authenticationQr.webp" alt="" />
              </div>

              <div className="a-copy-tools G-align-center">
                <p>EW407Y0EWRTIOUER</p>
                <i className="icon icon-iconCopy"></i>
              </div>
            </div>

            <div className="authentication-info">
              <h3>2FA authentication</h3>

              <div className="a-info-texts">
                <div className="a-info-text">
                  <p>1.</p>
                  <p>Scan the QR code using the Google authenticator app</p>
                </div>
                <div className="a-info-text">
                  <p>2.</p>
                  <p>Submit the code from Google authenticator app</p>
                </div>
              </div>

              <div className="authentication-inputs">
                <Input
                  variant={"gray-input"}
                  name="number"
                  placeholder="000-000"
                />

                <div className="a-email-input">
                  <Input
                    variant={"gray-input"}
                    name="number"
                    title={"3. Email code"}
                    placeholder="000000"
                  />
                </div>

                <div className="resend-code">
                  <p>
                    Resend code to mail <span>0:59</span>
                  </p>
                </div>


              </div>

               <div className="authentication-btn">
                <Button variant={'button-gradient'} text={"SIgn Up"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
