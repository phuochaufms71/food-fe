import classNames from "classnames/bind";
import styles from "./Cart.module.scss";

const Cart = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx('cart')}>
      Cart
    </div>
  )
}

export default Cart
