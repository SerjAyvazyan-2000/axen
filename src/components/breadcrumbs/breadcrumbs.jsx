import { NavLink } from "react-router-dom";
import "./breadcrumbs.scss";

const Breadcrumbs = () => {
  return (
    <section className="breadcrumbs-section">
      <div className="container">
        <nav className="breadcrumbs-block">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <i className="icon icon-arrowDown"></i>
            </li>

            <li>
              <NavLink className='active' to={"/affiliate"}>Affiliate</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
