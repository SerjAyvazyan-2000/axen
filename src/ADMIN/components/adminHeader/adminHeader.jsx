import "./adminHeader.scss";
import {Link} from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div className="admin-header G-justify-between">
      <Link to={'/'} className="admin-logo">
        <img src="/logo.svg" alt="" />
      </Link>

      <Link to={'/conclusion'} className="admin-balance G-align-center">
         <p>Available</p>
         <h3>$11,230.00</h3>
         <div className="share-icon G-center">
             <i className="icon icon-arrowLeft"></i>
         </div>
      </Link>
    </div>
  );
};

export default AdminHeader;
