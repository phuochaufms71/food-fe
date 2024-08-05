import classNames from "classnames/bind";
import styles from "./Popular.module.scss";
import PopularList from "./PopularList/PopularList";

const Popular = () => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx("popular")}>
        <div className={cx("container")}>
            <div className={cx("popular__inner")}>
                <h3 className={cx("popular__title")}>Popular Dishes</h3>
                <p className={cx("popular__desc")}>Odit id deserunt animi eligendi quibusdam soluta repudiandae, enim fugiat ut, tenetur nisi ea voluptatibus et.</p>
                <div className={cx("popular__wrap-btn")}>
                    <button className={cx("popular__btn")}>All</button>
                    <button className={cx("popular__btn")}>Pizza</button>
                    <button className={cx("popular__btn")}>Burger</button>
                    <button className={cx("popular__btn")}>Salad</button>
                    <button className={cx("popular__btn")}>Cold Drink</button>
                    <button className={cx("popular__btn")}>Coffee</button>
                    <button className={cx("popular__btn")}>Chicken</button>
                    <button className={cx("popular__btn")}>Ramen</button>
                </div>
                <PopularList />
            </div>
        </div>
        </div>
    )
}

export default Popular;