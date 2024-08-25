/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./UpdateAddress.module.scss";
import { useDispatch } from "react-redux";
import { getAddresses, updateAddress } from "../../redux/checkout/checkoutSlice";
import { ACCESS_TOKEN } from "../../constants";

const UpdateAddress = ({ selectedAddress, setIdSelected, setIsUpdate }) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [dataUpdate, setDataUpdate] = useState({
    firstName: selectedAddress?.firstName || "",
    lastName: selectedAddress?.lastName || "",
    phoneNumber: selectedAddress?.phoneNumber || "",
    email: selectedAddress?.email || "",
    country: selectedAddress?.country || "",
    stresh: selectedAddress?.stresh || "",
    city: selectedAddress?.city || "",
  });

  
  const handleUpdateAddress = async (e) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    e.preventDefault();
    await dispatch(
      updateAddress({
        accessToken,
        id: selectedAddress._id,
        updateAddress: dataUpdate,
      })
    );
    
    await dispatch(getAddresses(accessToken));
    
    setIdSelected("");
    setIsUpdate(false);
    setDataUpdate({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      country: "",
      stresh: "",
      city: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleUpdateAddress} className={cx("checkout__form")}>
        <h3 className={cx("checkout__form-title")}>Update Address</h3>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="fisrtName">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            id="fisrtName"
            value={dataUpdate.firstName}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, firstName: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="lastName">
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={dataUpdate.lastName}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, lastName: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="phone">
            Phone Number <span>*</span>
          </label>
          <input
            type="text"
            id="phone"
            value={dataUpdate.phoneNumber}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, phoneNumber: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="text"
            id="email"
            value={dataUpdate.email}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, email: e.target.value })
            }
            required
            placeholder="Email is email login"
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="country">
            Country <span>*</span>
          </label>
          <input
            type="text"
            id="country"
            value={dataUpdate.country}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, country: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="stresh">
            Stresh address <span>*</span>
          </label>
          <input
            type="text"
            id="stresh"
            placeholder="House number and tresh name"
            value={dataUpdate.stresh}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, stresh: e.target.value })
            }
            required
          />
        </div>
        <div className={cx("checkout__form-gr")}>
          <label htmlFor="city">
            Town/City <span>*</span>
          </label>
          <input
            type="text"
            id="city"
            value={dataUpdate.city}
            onChange={(e) =>
              setDataUpdate({ ...dataUpdate, city: e.target.value })
            }
            required
          />
        </div>
        <button
          onClick={handleUpdateAddress}
          className={cx("checkout__form-btn")}
        >
          Update Now
        </button>
      </form>
    </div>
  );
};

export default UpdateAddress;
