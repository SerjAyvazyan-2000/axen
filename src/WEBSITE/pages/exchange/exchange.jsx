import Button from "../../../ui/button/button";
import "./exchange.scss";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Form from "../../components/form/form";
import CryptoCalculator from "../../components/crypto-calculator/crypto-calculator";
import { Link } from "react-router-dom";

const Exchange = () => {
  return (
    <>
      <section className="e-hero-section">
        <div className="container-small">
          <div className="e-hero-body G-flex">
            <div className="e-hero-titles">
              <h2>
                <span> WEB 3.0</span>
                <b>Crypto Exchange</b>
              </h2>
              <p>
                Cryptocurrency exchange service.{" "}
                <span>Review risks before swapping.</span>
              </p>
            </div>
            <CryptoCalculator />
          </div>

          <div className="exchange-steps G-align-center">
            <div className="exchange-step">
              <div className="e-step-number blue-shadow">1</div>
              <div>
                 <h3>Choose currency</h3>
              <p>
                Pick one of 1M+ supported{" "}
                <span className="text-wrap">currency pairs from the list</span>
              </p>
              </div>
            </div>

            <div className="exchange-step">
              <div className="e-step-number green-shadow">2</div>
            <div>
                 <h3>Make deposit</h3>
              <p>
                Confirm details and send your assets to the generated address
              </p>
            </div>
            </div>

            <div className="exchange-step">
              <div className="e-step-number brown-shadow">3</div>
              <div>
                <h3>Receive crypto</h3>
              <p>Receive exchanged crypto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="platform-section">
        <div className="platform-items G-flex-column">
          <div className="platform-wrapper">
            <div className="platform-item G-align-center">
              <div className="p-item-info">
                <div className="p-item-titles">
                  <h3>Decentralized platform</h3>
                  <p>
                    Axen prioritizes your privacy and ensures security. We offer
                    a decentralized cryptocurrency exchange service.
                  </p>
                </div>
                <div className="p-item-descr G-flex-column">
                  <div>
                    <i className="icon icon-check"></i>
                    <p>Your privacy is our priority.</p>
                  </div>
                  <div>
                    <i className="icon icon-check"></i>
                    <p>We don’t manage your funds.</p>
                  </div>

                  <div>
                    <i className="icon icon-check"></i>
                    <p>Creating an account is optional.</p>
                  </div>
                </div>
              </div>

              <div className="p-item-media G-flex">
                <img src="/pInfoImg1.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="platform-wrapper p-bg-wrapper">
            <div className="platform-item G-align-center">
              <div className="p-item-info">
                <div className="p-item-titles">
                  <h3>Unlimited exchange</h3>
                  <p>
                    Start with under $2 and swap as much crypto as you like{" "}
                    <span className="desktop-text-wrap">— no upper limit.</span>
                  </p>
                </div>
                <Link className="p-item-link G-align-center">
                  <span>Details</span>
                  <i className="icon icon-arrowDown3"></i>
                </Link>
              </div>

              <div className="p-item-media G-flex">
                <img src="/pInfoImg2.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="platform-wrapper">
            <div className="platform-item G-align-center">
              <div className="p-item-info">
                <div className="p-item-titles">
                  <h3>Quick exchange</h3>
                  <p>
                    Exchanges take about 2 minutes on average. You can monitor
                    the swap progress on the exchange page.
                  </p>
                </div>

                <div className="p-item-tags G-flex">
                  <div className="p-item-tag">
                    <span>2min</span>
                    <p>Average exchange duration</p>
                  </div>

                  <div className="p-item-tag">
                    <span>98%</span>
                    <p>Success rate</p>
                  </div>

                  <div className="p-item-tag">
                    <span>1493</span>
                    <p>Currencies for exchange.</p>
                  </div>

                  <div className="p-item-tag">
                    <span>5M+</span>
                    <p>Happy clients</p>
                  </div>
                </div>

                <Link className="p-item-link G-align-center">
                  <span>Try exchange</span>
                  <i className="icon icon-arrowDown3"></i>
                </Link>
              </div>

              <div className="p-item-media G-flex">
                <img className='img-desktop' src="/pInfoImg3.webp" alt="" />
                  <img className='img-mobile' src="/pInfoImg3Mobile.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exchange;
