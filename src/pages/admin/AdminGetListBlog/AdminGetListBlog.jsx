import classNames from "classnames/bind";
import styles from "./AdminGetListBlog.module.scss";

const AdminGetListBlog = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("get-list-blog")}>
        Get list Blog
    </div>
  )
};

export default AdminGetListBlog;
