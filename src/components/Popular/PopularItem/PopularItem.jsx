import classNames from "classnames/bind";
import styles from "./PopularItem.module.scss";

const PopularItem = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx("popular__item")}>
      Popular Item
    </div>
  )
}

export default PopularItem;
