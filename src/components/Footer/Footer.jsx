import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { images } from "../images/index.js";

const Footer = () => {
  const cx = classNames.bind(styles);
  return (
    <footer className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("footer__inner")}>
          <div className={cx("footer__top")}>
            <img src={images.logo_food} alt="" className={cx("footer__logo")} />
            <div className={cx("footer__spacer")}></div>
            <div className={cx("footer__subscription")}>
              <p className={cx("footer__subscription-title")}>
                Subscription New
              </p>
              <p className={cx("footer__subscription-sub-title")}>
                Subscribe to the weekly newsletter
              </p>
            </div>
            <input
              className={cx("footer__input")}
              type="email"
              placeholder="Enter your email"
            />
            <button className={cx("footer__btn")}>Subscribe</button>
          </div>
          <div className={cx("footer__hr")}></div>
          <div className={cx("footer__bottom")}>
            <div className={cx("footer__column")}>
              <div className={cx("footer__column-desc")}>
                Culpa illum iusto ut qui, assumenda pariatur at quo consectetur
                nesciunt neque mollitia voluptas incidunt hic voluptate
                reprehenderit eum laboriosam non fugit.
              </div>
              <div className={cx("footer__column-wrap")}>
                <h3 className={cx("footer__column-title")}>Book A Food</h3>
                <p className={cx("footer__column-content")}>+84-364-500-846</p>
              </div>
              <div className={cx("footer__column-wrap")}>
                <h3 className={cx("footer__column-title")}>Opening Hours</h3>
                <p className={cx("footer__column-content")}>
                  8:00 AM - 23:00 PM
                </p>
              </div>
            </div>
            <div className={cx("footer__column")}>
              <h3 className={cx("footer__column-title")}>Quick Links</h3>
              <Link className={cx("footer__column-link")} to="/menu">
                Menu
              </Link>
              <Link className={cx("footer__column-link")} to="/blog">
                Blog
              </Link>
              <Link className={cx("footer__column-link")} to="/contact">
                Contact
              </Link>
            </div>
            <div className={cx("footer__column")}>
              <h3 className={cx("footer__column-title")}>Our Menu</h3>
              <Link className={cx("footer__column-link")}>Burgers</Link>
              <Link className={cx("footer__column-link")}>Pizza</Link>
              <Link className={cx("footer__column-link")}>Salads</Link>
              <Link className={cx("footer__column-link")}>Cold Drinks</Link>
            </div>
            <div className={cx("footer__column")}>
              <h3 className={cx("footer__column-title")}>Get In Touch</h3>
              <div className={cx("footer__row")}>
                <i className="fa-solid fa-location-dot"></i>
                <span>Long Thoi, Cho Lach, Ben Tre</span>
              </div>
              <div className={cx("footer__row")}>
                <i className="fa-solid fa-phone"></i>
                <span>+84-364-500-846</span>
              </div>
              <div className={cx("footer__row")}>
                <i className="fa-solid fa-envelope"></i>
                <span>phuochaubmw@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
