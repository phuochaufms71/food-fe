import classNames from "classnames/bind";
import styles from "./FoodDetail.module.scss";

const FoodDetail = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx('food-detail')}>
      Food Detail
    </div>
  )
}

export default FoodDetail;
