/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ModalDeleteAddress.module.scss";

const ModalDeleteAddress = ({ idSelected, setShowModalDelete, handleDeleteAddress }) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("modal-delete")}>
      <div className={cx("modal-delete__inner")}>
        <h3 className={cx("modal-delete__title")}>
          You are about to delete item
        </h3>
        <p className={cx("modal-delete__sub-title")}>
          This will delete your food from database
        </p>
        <p className={cx("modal-delete__question")}>Are you sure?</p>
        <div className={cx("modal-delete__wrap-btn")}>
          <button
            className={cx("modal-delete__btn-cancel")}
            onClick={() => setShowModalDelete(false)}
          >
            Cancel
          </button>
          <button
            onClick={() => {handleDeleteAddress(idSelected); setShowModalDelete(false)}}
            className={cx("modal-delete__btn-delete")}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteAddress;
