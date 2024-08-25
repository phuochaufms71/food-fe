/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./Logout.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/authSlice";
import Loading from "../../../components/Loading/Loading"
import { ACCESS_TOKEN } from "../../../constants";

const Logout = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    setLoading(true);
    await dispatch(
      logout(accessToken)
    )
    navigate("/login")
    setLoading(false)
  }

  return loading ? (<div className={cx("loading-icon")}><Loading /></div>) : (
    <div className={cx("box__logout")}>
      <div className={cx("logout")}>
        <div className={cx("logout__form")}>
          <h2 className={cx("logout__title")}>Come on soon!</h2>
          <p className={cx("logout__sub-title")}>You are attempting to log out of the website...</p>
          <p className={cx("logout__question")}>Are you sure?</p>
          <div className={cx("logout__wrap-btn")}>
            <button className={`${styles.btn} ${styles.btn__cancel}`} onClick={() => window.history.back()}>Cancel</button>
            <button className={`${styles.btn} ${styles.btn__logout}`} onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
