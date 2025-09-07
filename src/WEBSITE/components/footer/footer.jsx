import { Link, NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-big">
        <div className="footer-body G-align-start">
          <div className="footer-right-column G-flex-column">
            <Link to={"/"}>
              <img src="/logo.svg" alt="" />
            </Link>
            <p>
              Enterprise-grade cryptocurrency exchange infrastructure for the
              next generation of financial applications.
            </p>

            <div className="footer-socials G-align-center">
              <a href="">
                <img src="/socials.svg" alt="" />
              </a>
              <a href="">
                <img src="/socials2.svg" alt="" />
              </a>

              <a href="">
                <img src="/socials3.svg" alt="" />
              </a>

              <a href="">
                <img src="/socials4.svg" alt="" />
              </a>

              <a href="">
                <img src="/socials6.svg" alt="" />
              </a>

              <a href="">
                <img src="/socials7.svg" alt="" />
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <p>Company</p>
            <ul>
              <li>
                <NavLink to="#">Privacy Policy</NavLink>
              </li>

              <li>
                <NavLink to="#">Terms of Service</NavLink>
              </li>
            </ul>
          </nav>

          <div className="footer-emails G-flex-column">
            <a href="mailto:support@axen.pw">support@axen.pw</a>
            <a href="mailto:partners@axen.pw">partners@axen.pw</a>
            <a href="mailto:legal@axen.pw">legal@axen.pw</a>
          </div>
        </div>

        <p className="finish-text">© 2025 Axen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
