import Button from "../../ui/button/button";
import "./form.scss";

const Form = () => {
  return (
    <section className="form-section section section">
      <div className="container-big">
        <div className="form-body G-flex">
          <div className="form-description">

            <div className="form-titles desktop-block">
              <h2>
                Ready to get <span>Axen</span> with us?
              </h2>
              <p>Join hundreds of companies already building with Axen.pw</p>
            </div>

            <div className="form-texts ">
              <p>Have questions? Our team is here to help</p>
              <a href="mailto:partners@axen.pw">partners@axen.pw</a>
            </div>
          </div>

          <form className="form G-flex-column" action="">
            <div className="form-inputs G-align-center">
              <div className="form-input">
                <label>
                  <span>
                    Full name <b>*</b>
                  </span>
                  <input name="name" type="text" placeholder="John Doe" />
                </label>
              </div>

              <div className="form-input">
                <label>
                  <span>
                    Email <b>*</b>
                  </span>
                  <input
                    name="email"
                    type="text"
                    placeholder="john@company.com"
                  />
                </label>
              </div>
            </div>

            <div className="form-inputs G-align-center">
              <div className="form-input">
                <label>
                  <span>
                    Telegram <b>*</b>
                  </span>
                  <input name="telegram" type="text" placeholder="@user" />
                </label>
              </div>

              <div className="form-input">
                <label>
                  <span>Website</span>
                  <input name="site" type="text" placeholder="Your web site" />
                </label>
              </div>
            </div>

            <div className="form-textarea">
              <label>
                <span>Details</span>
                <textarea placeholder="Tell us about your project and expected trading volume..."></textarea>
              </label>
            </div>

            <div className="form-btn">
                <Button text={'Start Integration'}/>
            </div>
          </form>

                  <div className="form-titles mobile-block">
              <h2>
                Ready to get <b className="mobile-text-wrap"><span>Axen</span> with us?</b>
              </h2>
              <p>Join hundreds of companies already building with Axen.pw</p>
            </div>
        </div>
      </div>

      <div className="form-bg G-flex">
        <img src="/formBg.png" alt="" />
      </div>
    </section>
  );
};

export default Form;
