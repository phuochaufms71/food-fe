import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { useSelector } from "react-redux";

const Account = () => {
    const cx = classNames.bind(styles);
    const { user } = useSelector(state => state.auth);
    
  return (
    <>
        <div className={cx("account")}>
            <h3>Account Information</h3>
            <input type="file" />
            <div>
                <h4>First Name</h4>
                <p>{user.firstName}</p>
            </div>
            <div>
                <h4>Last Name</h4>
                <p>{user.lastName}</p>
            </div>
            <div>
                <h4>Phone Number</h4>
                <p>(+84) {user.phone}</p>
            </div>
            <div>
                <h4>Email</h4>
                <p>{user.email}</p>
            </div>
            <button>Edit Account</button>
        </div>
    </>
  )
}

export default Account;
