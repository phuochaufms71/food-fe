import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const Loading = () => {
  const cx = classNames.bind(styles);
  return (
      <div className={cx("loading")}>
        <div className={cx("container")}>
        <div className={cx("loading__inner")}>
          <h3>Loading...</h3>
          <p>Please wait a moment</p>
        </div>
      </div>
    </div>
  )
};

export default Loading;
