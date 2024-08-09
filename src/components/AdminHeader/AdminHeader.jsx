import styles from "./AdminHeader.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { images } from "../../components/images/index.js";
import { useState } from "react";

const AdminHeader = () => {
  const cx = classNames.bind(styles);
  const [active, setActive] = useState("dashboard");
  const [showMenu, setShowMenu] = useState(false);
  const [showAction, setShowAction] = useState(false);

  return (
    <div className={cx("admin-header")}>
      <div className={cx("container")}>
        <div className={cx("admin-header__inner")}>
          <div onClick={() => setShowMenu(prev => !prev)} className={cx("admin-header__menu")}>
            <img src={images.menu} className={cx("admin-header__menu-img")} alt="" />
          </div>
          {/* Logo */}
          <a href="/" className={cx("admin-header__link-img")}>
            <img
              src={images.logo_food}
              alt=""
              className={cx("admin-header__img")}
            />
          </a>
    
          {/* Navbar */}
          <nav className={cx("admin-header__navbar")}>
            <div onClick={() => setActive("dashboard")} className={cx("admin-header__navbar-item")}>
              <Link to="/" className={cx("admin-header__navbar-link")}>
                Dashboard
              </Link>
              {active === "dashboard" ? <div className={cx("active")}></div> : <></>}
            </div>
            <div onClick={() => setActive("analytics")} className={cx("admin-header__navbar-item")}>
              <Link to="/analytics" className={cx("admin-header__navbar-link")}>
                Analytics
              </Link>
              {active === "analytics" ? <div className={cx("active")}></div> : <></>}
            </div>
            <div onClick={() => setActive("sales")} className={cx("admin-header__navbar-item")}>
              <Link to="/sales" className={cx("admin-header__navbar-link")}>
                Sales
              </Link>
              {active === "sales" ? <div className={cx("active")}></div> : <></>}
            </div>
            <div onClick={() => setActive("products")} className={cx("admin-header__navbar-item")}>
              <Link to="/products" className={cx("admin-header__navbar-link")}>
                Products
              </Link>
              {active === "products" ? <div className={cx("active")}></div> : <></>}
            </div>
          </nav>

          {/* Navbar Mobie */}
          {showMenu && <div onClick={() => setShowMenu(prev => !prev)} className={cx("admin-header__navbar-fixed")}>
            <nav onClick={() => setShowMenu(prev => !prev)} className={cx("admin-header__navbar-mobie")}>
              <Link onClick={() => setShowMenu(prev => !prev)} to="/" className={cx("admin-header__navbar-link-mobie")}>
                Dashboard
              </Link>
              <Link onClick={() => setShowMenu(prev => !prev)} to="/analytics" className={cx("admin-header__navbar-link-mobie")}>
                Analytics
              </Link>
              <Link onClick={() => setShowMenu(prev => !prev)} to="/sales" className={cx("admin-header__navbar-link-mobie")}>
                Sales
              </Link>
              <Link onClick={() => setShowMenu(prev => !prev)} to="/products" className={cx("admin-header__navbar-link-mobie")}>
                Products
              </Link>
            </nav>
          </div>}

          {/* Action */}
          <div onClick={() => setShowAction(prev => !prev)} className={cx("admin-header__action")}>
            <img className={cx("admin-header__action-avt")} src={images.admin_avt} alt="" />
            {showAction && <div className={cx("admin-header__action-group")}>
              <div className={cx("admin-header__action-item")}>
                <img src={images.user} alt="user icon" />
                <span>User</span>
              </div>
              <div className={cx("admin-header__action-item")}>
                <img src={images.bell} alt="bell icon" />
                <span>Notifycation</span>
              </div>
              <div className={cx("admin-header__action-item")}>
                <img src={images.settings} alt="settings icon" />
                <span>Settings</span>
              </div>
              <Link to="/logout" className={cx("admin-header__action-item")}>
                <img src={images.logout_icon} alt="settings icon" />
                <span>Logout</span>
              </Link>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
