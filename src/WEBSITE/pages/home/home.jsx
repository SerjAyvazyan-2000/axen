import { useState } from "react";
import "./home.scss";
import Form from "../../components/form/form";
import Button from "../../../ui/button/button";

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const benefitsItems = [
    {
      title: "Exclusive Partner Program",
      descr:
        "Unlock premium features and volume-based discounts from day one. The more your business grows, the more you save, creating a powerful incentive for scaling your exchange.",
      icon: "./dolar.svg",
    },

    {
      title: "Full Profit Control",
      descr:
        "Maximize your revenue with fully customizable fee structures. Set your own spreads and commissions on over 2,500 trading pairs, starting from as low as 0.4%.",
      icon: "./percent.svg",
    },

    {
      title: "Effortless Integration",
      descr:
        "Get to market lightning-fast.Our comprehensive SDKs and clear documentation allow your developers to integrate a fixed-rate or standard exchange flow in minutes, not months.",
      icon: "./code.svg",
    },
    {
      title: "24/7 Support",
      descr:
        "Your users are covered around the clock. Our support team handles all complex issues—wrong deposits, missing memos, transaction disputes—so you don't have to.",
      icon: "./headphones.svg",
    },

    {
      title: "Flexible Profit Withdrawals",
      descr:
        "Access your earnings on your terms. Withdraw your revenue instantly in 11 major cryptocurrencies, whenever you want.",
      icon: "./cornerRight.svg",
    },
    {
      title: "Zero Maintenance Overhead",
      descr:
        "Once integrated, our API is hands-off for you. We manage all updates, security patches, and system maintenance, ensuring your exchange is always running on cutting-edge infrastructure.",
      icon: "./settings.svg",
    },
  ];

  const advantages = [
    {
      title: "99.95% Uptime SLA",
      name: "Powerful & Reliable Infrastructure",
      icon: "/code2.svg",
      text: "Our robust REST and WebSocket APIs are engineered for high throughput and 99.95% uptime, ensuring your service never misses a beat.",
    },
    {
      title: "Trading pairs 2,500+",
      name: "Unmatched Asset Coverage",
      icon: "/dolar2.svg",
      text: "Offer your clients a vast selection of over 800 cryptocurrencies and 2,500+ trading pairs, including cross-chain swaps and DeFi tokens.",
    },

    {
      title: "< 10ms latency",
      name: "Blazing-Fast Execution",
      icon: "/fast.svg",
      text: "Built on a global edge network, our engine processes thousands of transactions per second with sub-millisecond latency, ensuring a seamless user experience even during peak volatility.",
    },
    {
      title: "SOC 2 Type II Certified",
      name: "Military Security",
      icon: "/check.svg",
      text: "We are SOC 2 compliant, employing hardware security modules (HSM) and a zero-trust architecture to safeguard your assets and your users funds.",
    },

    {
      title: "$500M+ daily volume",
      name: "Deep Institutional Liquidity",
      icon: "/Deep.svg",
      text: "Access aggregated liquidity from top-tier exchanges and market makers, providing your users with tight spreads and minimal slippage on every trade",
    },
  ];
  const faqList = [
    {
      title: "How quickly can we integrate and go live?",
      subText:
        "Most of our partners have a basic exchange operational within a single business day. Our SDKs and dedicated integration support streamline the entire process.",
        id:1
    },
    {
      title: "Do we need to handle regulatory compliance?",
         id:2,
      subText:
        "You focus on your brand and customers. We provide the secure, compliant trading infrastructure. We recommend consulting with legal experts for your specific jurisdiction.",
    },

    {
      title: "What level of support can we expect?",
         id:3,
      subText:
        "You get 24/7 technical support for your users and a direct line to your dedicated account manager for strategic business discussions.",
    },
    {
      title: "Is the solution completely white-label?",
         id:4,
      subText:
        "Absolutely. Your users will interact solely with your brand. Our technology operates entirely behind the scenes, powering your exchange seamlessly.",
    },
  ];

const handleActiveFaq = (index) => {
  setActiveFaq(activeFaq === index ? null : index);
};

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-body">
            <div className="hero-description">
              <div className="app-model G-align-center">
                <span></span>
                <p>API v1.0 now available</p>
              </div>

              <h1 className="hero-title">
                Enterprise
                <span className="text-wrap">Crypto Exchange API</span>
              </h1>
              <p className="hero-sub-title">
                Build your cryptocurrency exchange with institutional-grade
                infrastructure. Our API provides deep liquidity, advanced
                security, and 99.9% uptime.
              </p>

              <Button href={'/signUp'} variant={'button-gradient'} text={"Start Integration"} />
            </div>

            <div className="hero-bts-icon G-flex">
              <img src="./btc.webp" alt="" />
            </div>

            <div className="hero-usdt-icon G-flex">
              <img src="./usdt.webp" alt="" />
            </div>
            <div className="hero-eth-icon G-flex">
              <img src="./eth.webp" alt="" />
            </div>

            <div className="hero-pol-icon G-flex">
              <img src="./pol.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="hero-code-img G-flex">
          <img className="img-desktop" src="/codeBlock.webp" alt="" />
          <img className="img-mobile" src="/codeBlockMpbile.webp" alt="" />
        </div>

        <div className="section-bg G-flex">
          <img className="img-desktop" src="./sectionBg1.png" alt="" />
          <img className="img-mobile" src="./sectionBg1Mobile.png" alt="" />
        </div>
      </section>

      <section className="benefits-section section">
        <div className="container-big">
          <div className="benefits-body">
            <h2 className="section-title">Business Benefits</h2>
            <p className="section-sub-title">
              Leveraging cutting-edge infrastructure ensures dependable
              performance for business.
            </p>

            <div className="benefits-items G-flex">
              {benefitsItems.map((item, index) => {
                return (
                  <div key={index} className="benefits-item G-align-start">
                    <img src={item.icon} alt="" />

                    <div className="b-item-texts">
                      <h3>{item.title}</h3>
                      <p>{item.descr}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="benefits-section-bg G-flex">
          <img className="img-desktop" src="./sectionBg2.png" alt="" />

          <img className="img-mobile" src="./sectionBg2Mobile.png" alt="" />
        </div>
      </section>

      <section className="advantages-section section">
        <div className="container-big">
          <div className="advantages-body">
            <h2 className="section-title">
              Advantages <span className="mobile-text-wrap">of our API</span>
            </h2>
            <p className="section-sub-title">
              Unlock the power of our API, built for scalability to deliver the
              reliability and performance your business demands.
            </p>

            <div className="advantages-list G-flex">
              {advantages.map((item, index) => {
                return (
                  <div key={index} className="advantage-item">
                    <h3>{item.title}</h3>

                    <div className="advantage-item-info">
                      <div className="a-item-header G-align-center">
                        <img src={item.icon} alt="" />
                        <h4>{item.name} </h4>
                      </div>

                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="advantages-section-bg G-flex">
          <img className="img-desktop" src="./sectionBg3.png" alt="" />
          <img className="img-mobile" src="./sectionBg3Mobile.png" alt="" />
        </div>
      </section>

      <section className="building-section section">
        <div className="container-big">
          <h2 className="section-title">Guide: How Start building today?</h2>

          <div className="building-body G-flex">
            <div className="building-description">
              <h3>Start Building in Minutes</h3>
              <p>
                Your path to launching a fully-featured crypto exchange is just
                three steps away.
              </p>
              <Button variant={'button-gradient'} text={"Get your API keys Now"} />
            </div>

            <div className="building-items G-flex-column">
              <div className="building-item G-align-start">
                <div className="b-item-number green-number G-center">1</div>
                <div className="b-item-info">
                  <h3>Get Your API Keys</h3>

                  <p>
                    Sign up for an account and receive your unique API
                    credentials instantly. No lengthy approval processes.
                  </p>
                </div>
              </div>

              <div className="building-item G-align-start">
                <div className="b-item-number blue-number G-center">2</div>
                <div className="b-item-info">
                  <h3>Integrate with Our SDK</h3>

                  <p>
                    Use our developer-friendly documentation ,SDKs or
                    ready-to-use integrations with most popular CMS engines to
                    plug our API into your platform. Go live in a single day.
                  </p>
                </div>
              </div>

              <div className="building-item G-align-start">
                <div className="b-item-number blueviolet-number G-center">
                  3
                </div>
                <div className="b-item-info">
                  <h3>Launch & Generate Revenue</h3>

                  <p>
                    Activate your exchange and start earning from the first
                    trade. It’s that simple.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="building-section-bg G-flex">
          <img className="img-desktop" src="./sectionBg4.png" alt="" />
          <img className="img-mobile" src="./sectionBg4Mobile.png" alt="" />
        </div>
      </section>

      <section className="integration-section section">
        <div className="container-big">
          <div className="integration-body">
            <h2 className="section-title">Integration & SDK</h2>

            <p className="section-sub-title">
              Get to market faster with our ready-made plugins, comprehensive
              SDKs, and developer-friendly documentation. Whether you use Tilda,
              OpenCart, a Telegram bot or custom code.
            </p>

            <div className="integration-items G-flex">
              <div className="integration-item">
                <div className="i-item-img G-flex">
                  <img src="./iIcons.webp" alt="" />
                </div>
                <p>10+ SDK</p>
              </div>

              <div className="integration-item">
                <div className="i-item-img G-flex">
                  <img src="./iIcons2.webp" alt="" />
                </div>
                <p>120+ CMS</p>
              </div>

              <div className="integration-item">
                <div className="i-item-img G-flex">
                  <img src="./telegram.svg" alt="" />
                </div>
                <p>Telegram bot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container-big">
          <h2 className="section-title">Why choose AXEN?</h2>

          <p className="section-sub-title">
            Discover why our API is the perfect choice for your business,
            offering unmatched scalability, reliability, and performance.
          </p>
          <div className="why-choose-body G-align-start">
            <div className="why-choose-texts">
              <h3>More Than an API — You Get a Full Partner Ecosystem.</h3>
              <p>
                We succeed when you succeed. Our model is built on a transparent
                revenue split, aligning our goals with yours for long-term,
                mutual growth.
              </p>
            </div>

            <div className="why-choose-dexription">
              <h3>Partner Privileges & Perks</h3>
              <p>
                Beyond technology, you gain a dedicated business development
                manager, volume-based discounts and free marketing consulting.
                We provide the tools and support for you to outpace the
                competition.
              </p>
            </div>
          </div>

          <div className="why-choose-btn">
            <Button href={'/signUp'} variant={'button-gradient'} text={"Start Integration"} />
          </div>
        </div>

        <div className="why-section-bg G-flex">
          <img className="img-desktop" src="./sectionBg5.png" alt="" />
          <img className="img-mobile" src="./sectionBg5Mobile.png" alt="" />
        </div>
      </section>

      <section id="faq" className="faq-section section">
        <div className="container-big">
          <h2 className="section-title">FAQ</h2>
          <p className="section-sub-title">
            Everything you need to know about integration
          </p>

          <div className="faq-items G-flex-column">
            {faqList.map((item, index) => {
              return (
                <div  key={item.id} 
                  onClick={() => handleActiveFaq(index)}
                  className={`faq-item ${activeFaq === index ? "active" : ""}`}
                >
                  <div className="faq-item-header G-align-center">
                    <p>{item.title}</p>
                    <i className="icon icon-arrowDown"></i>
                  </div>

                  <div className={`faq-sub-text`}>
                    {item.subText}
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </section>

      <Form  title={<>Ready to get <span>Axen</span> with us?</>} buttonText={'Start Integration'}  text={'Join hundreds of companies already building with Axen.pw'}/>
    </>
  );
};

export default Home;
