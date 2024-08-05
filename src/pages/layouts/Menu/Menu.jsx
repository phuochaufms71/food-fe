import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const Menu = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx('menu')}>
      <div>Menu</div>
    </div>
  )
}

export default Menu;
