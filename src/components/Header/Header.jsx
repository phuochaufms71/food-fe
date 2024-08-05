import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import { images } from "../images/index.js";

const Header = () => {
    const [itemLink, setItemLink] = useState("/");
    const cx = classNames.bind(styles);
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <div className={cx("header")}>
            <div className={cx("container")}>
                <div className={cx("header__inner")}>
                    <div onClick={handleShowMenu} className={cx("header__menu")}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <Link to="/">
                        <img src={images.logo_food} alt="logo" className={cx("header__logo")} />
                    </Link>
                    <nav className={cx("header__navbar")}>
                        <ul className={cx("header__navbar-list")}>
                            <li onClick={() => setItemLink("/")} className={cx("header__navbar-item")}>
                                <Link className={`${styles.header__navbar_link} ${itemLink === "/" ? `${styles.active}` : ''}`} to={itemLink}>Home</Link>
                            </li>
                            <li onClick={() => setItemLink("/menu")} className={cx("header__navbar-item")}>
                                <Link  className={`${styles.header__navbar_link} ${itemLink === "/menu" ? `${styles.active}` : ''}`} to="/menu">Menu</Link>
                            </li>
                            <li onClick={() => setItemLink("/blog")} className={cx("header__navbar-item")}>
                                <Link className={`${styles.header__navbar_link} ${itemLink === "/blog" ? `${styles.active}` : ''}`} to="/blog">Blog</Link>
                            </li>
                            <li onClick={() => setItemLink("/contact")} className={cx("header__navbar-item")}>
                                <Link className={`${styles.header__navbar_link} ${itemLink === "/contact" ? `${styles.active}` : ''}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Mobile */}
                    {showMenu && <nav className={cx("navbar__mobie")}>
                        <ul className={cx("navbar-list")}>
                            <li onClick={handleShowMenu} className={cx("navbar-item")}>
                                <Link className={cx("navbar-link")} to="/">Home</Link>
                            </li>
                            <li onClick={handleShowMenu} className={cx("navbar-item")}>
                                <Link className={cx("navbar-link")} to="/menu">Menu</Link>
                            </li>
                            <li onClick={handleShowMenu} className={cx("navbar-item")}>
                                <Link className={cx("navbar-link")} to="/blog">Blog</Link>
                            </li>
                            <li onClick={handleShowMenu} className={cx("navbar-item")}>
                                <Link className={cx("navbar-link")} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>}

                    {/* end navbar mobie */}
                    <div className={cx("header__action")}>
                        <Link to="/cart">
                            <i className={cx("fa-solid fa-cart-shopping")}></i>
                        </Link>
                        <Link to="/logout" className={cx("header__logout")}>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
