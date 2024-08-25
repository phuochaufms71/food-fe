/* eslint-disable react/prop-types */
import Tippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';
import styles from "./HeadlessTippy.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGear, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeadlessTippy = ({children}) => {
  const cx = classNames.bind(styles);
  return (
    <Tippy
      interactive={true}
      placement="bottom-start"
      render={attrs => (
          <div className={cx("tippy")} tabIndex="-1" {...attrs}>
            <Link to="/profile" className={cx("tippy__item")}>
              <FontAwesomeIcon className={cx("tippy__icon")}icon={faUser} />
              <span className={cx("tippy__text")}>Profile</span>
            </Link>
            <div className={cx("tippy__item")}>
              <FontAwesomeIcon className={cx("tippy__icon")}icon={faBell} />
              <span className={cx("tippy__text")}>Notifications</span>
            </div>
            <div className={cx("tippy__item")}>
              <FontAwesomeIcon className={cx("tippy__icon")}icon={faGear} />
              <span className={cx("tippy__text")}>Settings</span>
            </div>
            <Link to="/logout" className={cx("tippy__item")}>
              <FontAwesomeIcon className={cx("tippy__icon")}icon={faRightToBracket} />
              <span className={cx("tippy__text")}>Logout</span>
            </Link>
          </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default HeadlessTippy;
