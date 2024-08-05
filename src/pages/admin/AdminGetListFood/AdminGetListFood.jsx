import classNames from "classnames/bind";
import styles from "./AdminGetListFood.module.scss";

const AdminGetListFood = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("get-list-food")}>
        Get list Food
    </div>
  )
};

export default AdminGetListFood;
