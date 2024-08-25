/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { createAddress, deleteAddress, getAddresses } from "../../../redux/checkout/checkoutSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UpdateAddress from "../../../components/UpdateAddress/UpdateAddress";
import ModalDeleteAddress from "../../../components/Modal/ModalDeleteAddress/ModalDeleteAddress";

const Checkout = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartFood = cart.cartFoods;
  const totalAmount = cart.cartTotalAmount;
  const totalCartQuantity = cart.cartTotalQuantity;
  const { addresses }  = useSelector(state => state.address.addresses);
  const { email } = useSelector(state => state.auth.user);
  const [showCreateAddress, setShowCreateAddress] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idSelected, setIdSelected] = useState('');
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    country: "",
    stresh: "",
    city: ""
  })

  const handleShowCreateAddress = () => {
    setShowCreateAddress(true)
  }
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  
  const handleAddNewAddress = async (e) => {
    e.preventDefault();
    await dispatch(createAddress({
      accessToken,
      newAddress: formData
    }))
    await dispatch(getAddresses(accessToken))
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      country: "",
      stresh: "",
      city: ""
    })
    setShowCreateAddress(false)
  }

  const selectedAddress = useMemo(() => {
    return addresses?.find((addressSelect) => addressSelect._id === idSelected) || {};
  }, [addresses, idSelected]);

  const handleDeleteAddress = async (_id) => {
    await dispatch(deleteAddress({
      accessToken,
      id: _id
    }))
    await dispatch(getAddresses(accessToken))
    setIdSelected('')
  }

  return (
    <section className={cx('checkout')}>
      <div className={cx("container")}>
        <div className={cx("checkout__inner")}>
          <div className={cx("checkout__left")}>
            <div className={cx("checkout__address")}>
              <h2 className={cx("checkout__address-title")}>Shipping Address</h2>
              <p className={cx("checkout__address-desc")}>Where should we deliver your order?</p>
              {
                addresses?.map((address, index) => {  
                  const emailAddress = address.email;
                  if (email === emailAddress) {
                    return (
                     <div key={index} className={cx("checkout__address-item")}>
                        <div className={cx("checkout__address-user")}>
                          <p className={cx("checkout__address-user--name")}><span>{address?.firstName}</span> <span>{address?.lastName}</span></p>
                          <p className={cx("checkout__address-user--phone")}>(+84) {address?.phoneNumber}</p>
                          <p className={cx("checkout__address-user--location")}>{address?.stresh}, {address?.city}, {address?.country}</p>
                          <div className={cx("checkout__address-edit")}>
                            <FontAwesomeIcon onClick={() => {setIsUpdate(true); setIdSelected(address?._id) }} className={cx("checkout__address-edit--icon")} icon={faPenToSquare} />
                          </div>
                          <div className={cx("checkout__address-delete")}>
                            <FontAwesomeIcon onClick={() => {setIdSelected(address?._id); setShowModalDelete(true)}} className={cx("checkout__address-delete--icon")} icon={faTrashCan} />
                          </div>
                        </div>
                        {
                          showModalDelete && <ModalDeleteAddress setShowModalDelete={setShowModalDelete} idSelected={idSelected} handleDeleteAddress={handleDeleteAddress}/>
                        }
                     </div>
                    )
                  }
                })
              }
              <div className={cx("checkout__address-wrap-btn")}>
                { showCreateAddress || isUpdate ? <button onClick={() => {setShowCreateAddress(false); setIsUpdate(false)}} className={cx("checkout__address-cancel")}>Cancel</button> : <></> }
                <button onClick={handleShowCreateAddress} className={cx("checkout__address-add")}>Add new address</button>
              </div>

              {/* Update address */}
              {
                isUpdate && <UpdateAddress selectedAddress={selectedAddress} setIsUpdate={setIsUpdate} setIdSelected={setIdSelected} />
              }

              {/* Add new address */}
              {
                showCreateAddress && <form onSubmit={handleAddNewAddress} className={cx("checkout__form")}>
                  <h3 className={cx("checkout__form-title")}>Add New Address</h3>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="fisrtName">First Name <span>*</span></label>
                    <input type="text" id="fisrtName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="lastName">Last Name <span>*</span></label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="phone">Phone Number <span>*</span></label>
                    <input type="text" id="phone" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="text" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email is email login" required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="country">Country <span>*</span></label>
                    <input type="text" id="country" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="stresh">Stresh address <span>*</span></label>
                    <input type="text" id="stresh" placeholder="House number and tresh name" value={formData.stresh} onChange={(e) => setFormData({ ...formData, stresh: e.target.value })} required/>
                  </div>
                  <div className={cx("checkout__form-gr")}>
                    <label htmlFor="city">Town/City <span>*</span></label>
                    <input type="text" id="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} required/>
                  </div>
                  <button onClick={handleAddNewAddress} className={cx("checkout__form-btn")}>Add New Address</button>
                </form>
              }

              <div className={cx("checkout__food")}>
                <h3 className={cx("checkout__food-title")}>Food Shipping Detail</h3>
                {
                  cartFood?.map((food, index) => (
                    <div key={index} className={cx("checkout__food-item")}>
                      <div className={cx("checkout__food-content")}>
                        <div className={cx("checkout__food-wrap-img")}>
                          <img className={cx("checkout__food-img")} src={food?.image} alt="" />
                        </div>
                        <div className={cx("checkout__food-body")}>
                          <p className={cx("checkout__food-body--name")}>{food?.name} x <span>{food?.cartQuantity}</span></p>
                          <p className={cx("checkout__food-body--price")}>${food?.price}</p>
                        </div>
                      </div>
                      <p className={cx("checkout__food-total")}>${(food?.price * food?.cartQuantity).toFixed(2)}</p>
                    </div>
                  ))
                }
                <div className={cx("checkout__food-bottom")}> 
                  <div className={cx("checkout__food-prev-shopping")}>
                    <FontAwesomeIcon className={cx("checkout__food-prev-shopping--icon")} icon={faChevronLeft} />
                    <Link className={cx("checkout__food-prev-shopping--link")} to="/shopping">Continue Shopping</Link>
                  </div>
                  <Link to="/cart/checkout/payment" className={cx("checkout__food-next")}>
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("checkout__right")}>
            <div className={cx("checkout__fee")}>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Subtotal:</p>
                <p className={cx("checkout__fee-number")}>${totalAmount.toFixed(2)}</p>
              </div>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Tax:</p>
                <p className={cx("checkout__fee-number")}>${(0.1 * totalCartQuantity).toFixed(2)}</p>
              </div>
              <div className={cx("checkout__fee-body")}>
                <p className={cx("checkout__fee-title")}>Deliver:</p>
                <p className={cx("checkout__fee-number")}>${(0.3 * totalCartQuantity).toFixed(2)}</p>
              </div>
              <div className={cx("checkout__fee-total")}>
                <p className={cx("checkout__fee-total--title")}>Estimated Total</p>
                <p className={cx("checkout__fee-total--number")}>${(totalAmount + 0.1 * totalCartQuantity + 0.3 * totalCartQuantity).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout;
