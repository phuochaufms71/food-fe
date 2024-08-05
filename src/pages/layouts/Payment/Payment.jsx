import classNames from "classnames/bind";
import styles from "./Payment.module.scss";

const Payment = () => {
    const cx = classNames.bind(styles);

  return (
    <div className={cx('payment')}>
      Payment
    </div>
  )
}

export default Payment;
