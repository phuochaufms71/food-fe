import styles from "./AdminHeader.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { images } from "../../components/images/index.js";
const AdminHeader = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("admin-header")}>
      <div className={cx("container")}>
        <div className={cx("admin-header__inner")}>
          {/* Logo */}
          <a href="/" className={cx("admin-header__link-img")}>
            <img
              src={images.logo_food}
              alt=""
              className={cx("admin-header__img")}
            />
          </a>
    
          {/* Search */}
          <div className={cx("admin-header__search")}>
            <input type="text" className={cx("admin-header__input")} placeholder="Search..."/>
            <div className={cx("admin-header__icon")}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
    
          {/* Navbar */}
          <nav className={cx("admin-header__navbar")}>
            <Link to="/" className={cx("admin-header__navbar-link")}>
              Dashboard
            </Link>
            <Link to="/analytics" className={cx("admin-header__navbar-link")}>
              Analytics
            </Link>
            <Link to="/sales" className={cx("admin-header__navbar-link")}>
              Sales
            </Link>
            <Link to="/products" className={cx("admin-header__navbar-link")}>
              Products
            </Link>
          </nav>
    
          {/* Action */}
          <div className={cx("admin-header__action")}>
            <i className="fa-solid fa-gear"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user">
              {/* <div>
                <div>
                  Profile
                </div>
                <div>
                  
                </div>
                <div>
                  Logout
                </div>
              </div> */}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
