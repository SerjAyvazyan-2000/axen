import { Link } from "react-router-dom";
import Button from "../../../ui/button/button";
import Input from "../../../ui/input/input";
import Textarea from "../../../ui/textarea/textarea";
import AdminHeader from "../../components/adminHeader/adminHeader";
import "./merchant.scss";
import Steps from "./steps";

const SiteConnect = () => {
  return (
    <section className="merchant-section">
      <div className="admin-container">
        <AdminHeader />

        <h2 className="admin-section-title admin-arrow-title G-align-center">
            <Link className="icon icon-arrowLeft2" to='/merchant'></Link>
          <span>Site connect</span>
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
          curent={1}
        />

        <form className="site-connect-form G-flex-column">
          <Input
            className={""}
            type={"text"}
            title="Name site"
            required={true}
            variant={"gray-input"}
            name={"site"}
            placeholder={"Site"}
            error={false}
          />

          <Input
            className={""}
            type={"email"}
            title="Domain"
            required={true}
            variant={"gray-input"}
            name={"email"}
            placeholder={"example.com"}
            error={false}
          />

          <Textarea
            className={""}
            title="Tell us about your project"
            required={false}
            variant={"gray-textarea"}
            name={"email"}
            placeholder={"Tell us what you are working on"}
            error={false}
          />
        </form>

        <div className="site-connect-btn">
            <Button href={'/confirm'} variant={'primary-btn'} text={'Connect and continue'}/>
        </div>
      </div>
    </section>
  );
};

export default SiteConnect;
