import { NavLink } from "react-router-dom";
import "./sigin.scss";
import Input from "../../../ui/input/input";
import Button from "../../../ui/button/button";

const CodeAuthentication = () => {
  return (
    <section className="authorization-section">
      <div className="authorization-container">
        <NavLink to={"/"} className=" G-center">
          <img src="/logo.svg" alt="" />
        </NavLink>

        <div className="authorization-body">
          <NavLink to={"/"} className="a-back-link G-align-center">
            <i className="icon icon-arrowLeft"></i>
            <span>Back</span>
          </NavLink>
          <h3 className="a-title">SIgn in</h3>

          <form className="a-form" action="">
            <div className="authenticator-inputs G-flex-column">
              <h3>2FA authentication</h3>
              <Input
                required={false}
                placeholder={"000-000"}
                name={"number"}
                variant={"gray-input"}
                title={"Submit the code from Google authenticator app"}
                type={"text"}
              />
            </div>

            <div className="authentication-btn">
              <Button variant={'button-gradient'} text={"SIgn Up"} />
            </div>
          </form>

          
        </div>
      </div>
    </section>
  );
};

export default CodeAuthentication;
