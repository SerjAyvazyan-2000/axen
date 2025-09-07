import { Link } from "react-router-dom";
import AdminHeader from "../../components/adminHeader/adminHeader";
import "./refferal.scss";
import Button from "../../../ui/button/button";

const Refferal = () => {
  return (
    <section className="refferal-section">
      <div className="admin-container">
        <AdminHeader />

        <div className="refferal-titles">
          <h2 className="admin-section-title">
            Start earning{" "}
            <span className="text-wrap">already today with AXEN!</span>
          </h2>
          <b>Invite friends and earn rewards</b>
        </div>

        <div className="refferals-items G-flex">
          <div className="refferal-item">
            <div className="r-item-icon">
              <img src="./refferalIcon1.svg" alt="" />
            </div>
            <h3>Earn commission</h3>
            <p>Up to 20% on each <span className='text-wrap'>transaction of your</span> referrals</p>
          </div>

          <div className="refferal-item">
            <div className="r-item-icon">
              <img src="./refferalIcon2.svg" alt="" />
            </div>
            <h3>Multi-level <span className="text-wrap">system</span></h3>
            <p>Earn bonuses from your referrals' referrals</p>
          </div>

          <div className="refferal-item">
            <div className="r-item-icon">
              <img src="./refferalIcon3.svg" alt="" />
            </div>
            <h3>Growing income</h3>
            <p>The more active referrals youhave, the higher your percentage</p>
          </div>
          
        </div>

        <div className='refferal-btn'>
            <img src="./telegramBg.svg" alt="" />
            <span>Contact your manger</span>
        </div>
      </div>
    </section>
  );
};

export default Refferal;
