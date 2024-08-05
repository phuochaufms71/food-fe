import styles from "./Loading.module.scss";
import classNames from "classnames/bind";

const Loading = () => {
  const cx = classNames.bind(styles);
  return <div className={cx("loading")}></div>;
};

export default Loading;
