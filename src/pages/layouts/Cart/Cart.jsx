/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearCartFoods, decreaseCart, getTotals, increaseCart, removeFoodFromCart } from "../../../redux/cart/cartSlice";
import { images } from "../../../components/images/index.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const Cart = () => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const cartFoods = useSelector(state => state.cart.cartFoods)
    const cart = useSelector(state => state.cart)

    const handleDeleteCartFood = (cartFood) => {
      dispatch(removeFoodFromCart(cartFood))
    }

    const handleDecreaseFood = (cartFood) => {
      dispatch(decreaseCart(cartFood))
    }

    const handleIncreaseFood = (cartFood) => {
      dispatch(increaseCart(cartFood))
    }

    const handleDeleteAllFoods = () => {
      dispatch(clearCartFoods())
    }

    useEffect(() => {
      dispatch(getTotals())
    }, [cart])

  return cartFoods.length === 0 ? (
    <section className={cx("cart-empty")}>
      <h3 className={cx("cart-empty__title")}>Shopping Cart</h3>
      <p className={cx("cart-empty__desc")}>Your cart is currently empty</p>
      <Link to="/shopping" className={cx("cart-empty__link")}>
        <FontAwesomeIcon className={cx("cart-empty__icon")} icon={faArrowLeft} />
        Start Shopping
      </Link>
    </section>
  ) : (
    <section className={cx('cart')}>
      <div className={cx("container")}>
        <div className={cx("cart__inner")}>
          <table className={cx("cart__table")}>
            <thead className={cx("cart__thead")}>
              <tr className={cx("cart__tr")}>
                <th className={cx("cart__th")}>Image</th>
                <th className={cx("cart__th")}>Name</th>
                <th className={cx("cart__th")}>Price</th>
                <th className={cx("cart__th")}>Quantity</th>
                <th className={cx("cart__th")}>Delete</th>
              </tr>
            </thead>
            {
              cartFoods.map((cartFood, index) => (
                <tbody key={index} className={cx("cart__tbody")}>
                  <tr className={cx("cart__tr")}>
                    <td className={cx("cart__td")}>
                      <img className={cx("cart__img")} src={cartFood.image.secure_url} alt="" />
                    </td>
                    <td className={cx("cart__td-name")}>
                      <div className={cx("cart__name")}>
                        {cartFood.name}
                      </div>
                      <p className={cx("cart__name-full")}>{cartFood.name}</p>
                    </td>
                    <td className={cx("cart__td")}>
                      ${cartFood.price}
                    </td>
                    <td className={cx("cart__td")}>
                      <button onClick={() => handleDecreaseFood(cartFood)} className={cx("cart__btn")}>-</button>
                      <p className={cx("cart__quantity")}>{cartFood.cartQuantity}</p>
                      <button onClick={() => handleIncreaseFood(cartFood)} className={cx("cart__btn")}>+</button>
                    </td>
                    <td className={cx("cart__td")}>
                      <img onClick={() => handleDeleteCartFood(cartFood)} className={cx("cart__delete")} src={images.delete_icon} alt="" />
                    </td>
                  </tr>
                </tbody>
              ))
            }
          </table>
          <div className={cx("cart__action")}>
            <Link className={cx("cart__shopping")} to="/shopping">
              <FontAwesomeIcon icon={faChevronLeft} className={cx("cart__shopping--icon")}/>
              <span>Shopping</span>
            </Link>
            <button onClick={() => handleDeleteAllFoods()} className={cx("cart__clear")}>Clear Cart Foods</button>
          </div>
        </div>

        <div className={cx("cart__total")}>
          <h3 className={cx("cart__total-title")}>Cart Total</h3>
          <div>
            <p className={cx("cart__total-item")}><span>Subtotal: </span>${cart.cartTotalAmount.toFixed(2)}</p>
            <p className={cx("cart__total-item")}><span>Tax ($/food): </span>$0.1</p>
            <p className={cx("cart__total-item")}><span>Deliver ($/food): </span>$0.3</p>
          </div>
          <Link to="/cart/checkout" className={cx("cart__total-checkout")}>Checkout</Link>
        </div>
      </div>
      <ToastContainer />
    </section>
  ) 
}

export default Cart;
