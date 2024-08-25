import classNames from "classnames/bind";
import styles from "./FoodList.module.scss";

const FoodList = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx('foodlist')}>
      Food list
    </div>
  )
}

export default FoodList;
