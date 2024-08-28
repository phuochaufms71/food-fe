import classNames from "classnames/bind";
import styles from "./Payment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ModalPayment from "../../../components/Modal/ModalPayment/ModalPayment";
import { addPayment } from "../../../redux/payment/paymentSlice";
import { clearCartFoods } from "../../../redux/cart/cartSlice";

const Payment = () => {
  const cx = classNames.bind(styles);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [isPayment, setIsPayment] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    numberCard: "",
    time: "",
    cvv: "",
    date: "",
    month: "",
    year: "",
    hours: "",
    minutes: "",
    seconds: ""
  })

  const handlePayment = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.numberCard || !formData.time || !formData.cvv) {
      toast.error("All fields are required")
    } else {
      var timeHandlePayment = new Date();
      var date =timeHandlePayment.getDate();
      var month = timeHandlePayment.getMonth();
      var year = timeHandlePayment.getFullYear();
      var hours = timeHandlePayment.getHours();
      var minutes = timeHandlePayment.getMinutes();
      var seconds = timeHandlePayment.getSeconds();
      await dispatch(addPayment({...formData, date, month, year, hours, minutes, seconds}))
      setIsPayment(true);
      setFormData({
        name: "",
        numberCard: "",
        time: "",
        cvv: "",
        date: "",
        month: "",
        year: "",
        hours: "",
        minutes: "",
        seconds: ""
      })
      dispatch(clearCartFoods())
    }
  }

  return (
    <>
      <section className={cx("payment")}>
        <div className={cx("container")}>
          <div className={cx("payment__inner")}>
            <div className={cx("payment__body")}>
              <h3 className={cx("payment__title")}>Payment</h3>
              <div className={cx("payment__card")}>
                <div className={cx("payment__item")}>
                  <h4 className={cx("payment__item-title")}>Card Type</h4>
                  <div className={cx("payment__item-body")}>
                    <button className={cx("payment__item-body--type")}>
                      <FontAwesomeIcon icon={faCreditCard} />
                      Credit card
                    </button>
                    <button className={cx("payment__item-body--type")}>
                      <FontAwesomeIcon icon={faCreditCard} />
                      Debit card
                    </button>
                  </div>
                </div>
                <div className={cx("payment__item")}>
                  <h4 className={cx("payment__item-title")}>Card Detail</h4>
                  <form onSubmit={handlePayment} className={cx("payment__item-wrap")}>
                    <div className={cx("payment__item-body")}>
                      <label className={cx("payment__item-body--label")} htmlFor="">Name On Card</label>
                      <input className={cx("payment__item-body--input")} type="text" placeholder="Henry Anos" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required/>
                    </div>
                    <div className={cx("payment__item-body")}>
                      <label className={cx("payment__item-body--label")} htmlFor="">Card Number</label>
                      <input value={formData.numberCard} onChange={(e) => setFormData({...formData, numberCard: e.target.value})} className={cx("payment__item-body--input")} type="text" placeholder="5355-1345-2234-6615" required maxLength={16}/>
                    </div>
                    <div className={cx("payment__item-row")}>
                      <div className={cx("payment__item-body")}>
                        <label className={cx("payment__item-body--label")} htmlFor="">Valid On</label>
                        <input value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className={cx("payment__item-body--input")} type="month" required/>
                      </div>
                      <div className={cx("payment__item-body")}>
                        <label className={cx("payment__item-body--label")} htmlFor="">CVV Code</label>
                        <input value={formData.cvv} onChange={(e) => setFormData({...formData, cvv: e.target.value})} className={cx("payment__item-body--input")} type="text" placeholder="***" required maxLength={3}/>
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <button onClick={handlePayment} className={cx("payment__item-body--btn")}>Payment ${(cart.cartTotalAmount + 0.1*cart.cartTotalQuantity + 0.3*cart.cartTotalQuantity).toFixed(2)}</button>
                  <ToastContainer />
                </div>
               
              </div>
            </div>
            <span className={cx("payment__back")} onClick={() => window.history.back()}>
              <FontAwesomeIcon icon={faChevronLeft} className={cx("payment__back-icon")} />
              Go Back
            </span>
          </div>
        </div>
      </section>
      {
        isPayment && <ModalPayment setIsPayment={setIsPayment} />
      }
    </>
  )
}

export default Payment;
