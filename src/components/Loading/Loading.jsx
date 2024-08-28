import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const Loading = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("container")}>
      <div className={cx("loading")}>
        <h3>Loading...</h3>
        <p>Please wait a moment</p>
      </div>
    </div>
  )
};

export default Loading;
