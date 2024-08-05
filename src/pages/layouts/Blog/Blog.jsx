import classNames from "classnames/bind";
import styles from "./Blog.module.scss";

const Blog = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx('blog')}>
      <div>Blog</div>
    </div>
  )
}

export default Blog;
