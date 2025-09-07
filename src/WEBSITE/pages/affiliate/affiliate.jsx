import Button from "../../../ui/button/button";
import "./affiliate.scss";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Form from "../../components/form/form";

const Affiliate = () => {
  const benefitsItems = [
    {
      title: "Powerful tools for success",
      descr:
        "Get access to dedicated support, high-converting marketing materials, and real-time tracking to optimize your campaigns and maximize your results.",
      icon: "./percent.svg",
    },

    {
      title: "Generate passive income",
      descr:
        "Once you refer your audience, our platform does the work. Watch your commissions grow automatically as your referrals continue to use our API.",
      icon: "./dolar.svg",
    },
    {
      title: "Maximize your earnings",
      descr:
        "We offer one of the most competitive commission structures in the industry. Earn generous, ongoing rewardsfor the lifetime value of every user you refer.",
      icon: "./dolar.svg",
    },
  ];

  const chooseItems = [
    {
      title: "Unbeatable Platform Reliability",
      descr:
        "Subtext: 99.9% uptime ensures the services you refer never go offline, protecting their revenue and your continuous commissions",
      icon: "./chooseImg1.svg",
    },

    {
      title: "Institutional-Grade Security",
      descr:
        "Promote with confidence. Our top-tier security measures protect your referrals funds and data, safeguarding your reputation",
      icon: "./chooseImg2.svg",
    },
    {
      title: "Deep Liquidity & 2500+ Pairs",
      descr:
        "Users get the best prices and a huge range of assets, which means higher satisfaction and better conversion rate into exchange",
      icon: "./chooseImg3.svg",
    },

    {
      title: "Dedicated Partner Support",
      descr:
        "You’re not just a link. Get personal guidance from our team to help you strategize and increase your conversion rates",
      icon: "./chooseImg4.svg",
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <section className="a-hero-section">
        <div className="container">
          <div className="a-hero-body G-flex">
            <div className="a-hero-description">
              <h1 className="a-hero-title">
                Turn Your Audience
                <span className="text-wrap"> Into Revenue</span>
              </h1>
              <p className="a-hero-sub-title">
                Join the AXEN Affiliate Program. Earn industry-leading
                commissions for every user you bring to our secure,
                high-performance crypto exchange API.
              </p>

              <Button  href={'/sigIn'} variant={'button-gradient'} text={"Sign in"} />
            </div>

            <div className="a-hero-media G-flex">
              <img className="img-desktop" src="./aHeroImg.webp" alt="" />

              <img className="img-mobile" src="./aHeroImgMobile.webp" alt="" />
            </div>

            <div className="a-bts-icon G-flex">
              <img src="./btc.webp" alt="" />
            </div>

            <div className="a-usdt-icon G-flex">
              <img src="./usdt2.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="a-section-bg G-flex">
          <img className="img-desktop" src="./asectionBg1.png" alt="" />
          <img className="img-mobile" src="./asectionBg1Mobile.png" alt="" />
        </div>

        <div className="usdt-right-icon G-flex">
          <img className="img-desktop" src="./usdt3.webp" alt="" />
          <img className="img-mobile" src="./usdt3Mobile.webp" alt="" />
        </div>
      </section>

      <section className="benefits-section section">
        <div className="container-big">
          <div className="benefits-body">
            <h2 className="section-title">Why join our affiliate program?</h2>
            <p className="section-sub-title">
              Partnering with top-tier infrastructure guarantees reliable
              performance for your business, enhancing your affiliate marketing
              efforts.
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

        <div className="a-benefits-section-bg G-flex">
          <img className="img-desktop" src="./asectionBg2.png" alt="" />

          <img className="img-mobile" src="./asectionBg2Mobile.png" alt="" />
        </div>
      </section>

      <section className="partners-section section">
        <div className="container-big">
          <div className="partners-body G-flex">
            <div className="partners-description">
              <div className="partners-titles desktop-block">
                <h2 className="section-title">
                  See How Our Top Partners Succeed
                </h2>
                <p className="section-sub-title">
                  Get inspired by the strategies that are already driving
                  significant revenue for our affiliates.
                </p>
              </div>

              <ul>
                <li>
                  <i className="icon icon-check"></i>
                  <span>
                    {" "}
                    Content & Reviews: Creating authentic reviews and tutorials
                    about the AXEN API experience.
                  </span>
                </li>
                <li>
                  <i className="icon icon-check"></i>
                  <span>
                    Community Building: Sharing their unique affiliate link
                    within dedicated crypto communities and social channels.
                  </span>
                </li>

                <li>
                  <i className="icon icon-check"></i>
                  <span>
                    Strategic SEO: Targeting key exchange-related search terms
                    to attract high-intent users.
                  </span>
                </li>
              </ul>
        
                <Button variant={'button-gradient'} text={"Talk to a Partnership Manager"} />
       
            </div>

            <div className="partners-media G-flex">
              <img className="img-desktop" src="./partnersMedia.webp" alt="" />
              <img
                className="img-mobile"
                src="./partnersMediaMobile.png"
                alt=""
              />
            </div>

            <div className="partners-titles mobile-block">
              <h2 className="section-title">
                See How Our Top Partners Succeed
              </h2>
              <p className="section-sub-title">
                Get inspired by the strategies that are already driving
                significant revenue for our affiliates.
              </p>
            </div>
          </div>
        </div>

        <div className="partners-bg G-flex">
          <img src="./partnersBg.png" alt="image" />
        </div>
      </section>

      <section className="earnings-section section">
        <div className="container-big">
          <div className="earnings-body">
            <h2 className="section-title">
              Your Earnings Potential is Unlimited
            </h2>
            <p className="section-sub-title">
              Our partners earnings are as unique as their audiences. From
              dedicated bloggers to large communities, everyone enjoys scalable
              commissions. Let's discuss what's possible for you.
            </p>

            <div className="earnings-items G-align-center">
              <div className="earning-item">
                <h3>$2,500</h3>
                <p>Monthly Average</p>
                <span>First 3 months</span>
              </div>
              <div className="earning-item">
                <h3>$7,800</h3>
                <p>Monthly Average</p>
                <span>After 6 months</span>
              </div>

              <div className="earning-item">
                <h3>$138,000+</h3>
                <p>Top Performers</p>
                <span>Annual earnings</span>
              </div>
            </div>

            <div className="earnings-btn">
              <Button variant={'button-gradient'} text={"Get in touch"} />
            </div>
          </div>
        </div>
      </section>

      <section className="guide-section section">
        <div className="container-big">
          <div className="guide-body G-flex">
            <div className="guide-mobile-titles mobile-block">
              <h3>Simple & Fair Terms</h3>
              <p>A Partnership Built on Transparency</p>
            </div>
            <div className="guide-description">
              <h2>
                We believe in clear, straightforward terms that{" "}
                <span className="text-wrap">put our partners first.</span>
              </h2>

              <ul>
                <li>
                  <i className="icon icon-check"></i>
                  <span>Timely, reliable monthly payouts</span>
                </li>
                <li>
                  <i className="icon icon-check"></i>
                  <span>Lifetime revenue share commissions</span>
                </li>

                <li>
                  <i className="icon icon-check"></i>
                  <span>
                    Multiple tracking technologies for accurate attribution
                  </span>
                </li>

                <li>
                  <i className="icon icon-check"></i>
                  <span>No hidden caps or limits</span>
                </li>

                <li>
                  <i className="icon icon-check"></i>
                  <span>Dedicated manager for strategic support</span>
                </li>
              </ul>
              <div className="guide-btn desktop-block">
              <Button variant={'button-gradient'} text={"Apply Now"} />
              </div>


            </div>

            <div className="guide-wrapper">
              <h2 className="section-title">Ready to Start?</h2>
              <p>Get approved in less than 24 hours</p>

              <div className=" guide-items G-flex-column">
                <div className=" guide-item G-align-start">
                  <div className="guide-item-number g-green-number G-center">
                    1
                  </div>
                  <div className=" guide-item-info">
                    <h3>Submit Your Application</h3>

                    <p>
                      Fill out our straightforward partner application form.
                      It’s designed to be quick, with no complex requirements or
                      hidden hurdles.
                    </p>
                  </div>
                </div>

                <div className=" guide-item  G-align-start">
                  <div className="guide-item-number g-blue-number G-center">
                    2
                  </div>
                  <div className=" guide-item-info">
                    <h3>Get Instant Pre-Approval</h3>

                    <p>
                      Our automated system will review your details instantly.
                      In most cases, you'll receive a pre-approval decision and
                      next steps within minutes, not days.
                    </p>
                  </div>
                </div>

                <div className=" guide-item  G-align-start">
                  <div className="guide-item-number g-blueviolet-number G-center">
                    3
                  </div>
                  <div className=" guide-item-info">
                    <h3>Onboard & Start Earning</h3>

                    <p>
                      Once fully approved (in less than 24 hours), your
                      dedicated manager will guide you through setup. Integrate
                      your tracking and start generating revenue from day one,
                      backed by our lifetime revenue share.
                    </p>
                  </div>
                </div>
              </div>
            </div>

             <div className="guide-btn mobile-block">
              <Button variant={'button-gradient'} text={"Apply Now"} />
              </div>
          </div>
        </div>

        <div className="guide-bg G-flex">
          <img src="./guideBg.png" alt="image" />
        </div>
      </section>

      <section className="a-choose-section section">
        <div className="container-big">
          <div className="benefits-body">
            <h2 className="section-title">
              Why choose <span>AXEN</span>?
            </h2>
            <p className="section-sub-title">
              Your audience trusts you. We provide the robust, reliable platform
              that protects that trust and keeps them using our services.
            </p>

            <div className="a-benefits-items  G-flex">
              {chooseItems.map((item, index) => {
                return (
                  <div key={index} className="a-benefits-item G-align-start">
                    <img src={item.icon} alt="" />

                    <div className="a-choose-texts">
                      <h3>{item.title}</h3>
                      <p>{item.descr}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Form
        title={"Ready to Unlock Your Earning Potential?"}
        text={
          "Let `s have a quick, no-obligation chat. Our Partnership Manager will answer your questions and show you how to get started."
        }
        classTitles={'a-form-titles'}
        buttonText={" Apply for the Program Now"}
      />
    </>
  );
};

export default Affiliate;
