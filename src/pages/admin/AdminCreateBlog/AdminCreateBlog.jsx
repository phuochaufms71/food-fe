import classNames from "classnames/bind";
import styles from "./AdminCreateBlog.module.scss";

const AdminCreateBlog = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("create-blog")}>
        Create Blog
    </div>
  )
};

export default AdminCreateBlog;
