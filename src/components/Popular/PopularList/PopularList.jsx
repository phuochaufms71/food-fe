import classNames from "classnames/bind";
import styles from "./PopularList.module.scss";
import PopularItem from "../PopularItem/PopularItem";

const PopularList = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx("popular__list")}>
            <PopularItem />
        </div>
    )
}

export default PopularList;