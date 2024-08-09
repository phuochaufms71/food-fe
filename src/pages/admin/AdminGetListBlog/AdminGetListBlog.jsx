import classNames from "classnames/bind";
import styles from "./AdminGetListBlog.module.scss";
import { useSelector } from "react-redux";
import { getBlogsFromStore } from "../../../redux/blog/blogSlice";

const AdminGetListBlog = () => {
  const { blogs } = useSelector(getBlogsFromStore);
  console.log(blogs)
  const cx = classNames.bind(styles);
  return (
    <div className={cx("get-list-blog")}>
        Get list Blog
    </div>
  )
};

export default AdminGetListBlog;
