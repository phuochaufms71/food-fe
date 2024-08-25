/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Shopping.module.scss";
import { useState } from "react";
import ShoppingList from "./ShoppingList/ShoppingList";

const Shopping = () => {
  const cx = classNames.bind(styles);
  const [category, setCategory] = useState("all");

  return (
    <section className={cx("menu")}>
      <div className={cx("container")}>
        <div className={cx("menu__title")}>Shopping Food</div>
        <p className={cx("menu__desc")}>
          Dolor accusantium error voluptatum odit autem sunt ullam tempore totam tempora nam natus nemo reprehenderit omnis magni officiis, sequi suscipit repellat velit.
        </p>
        <div className={cx("menu__wrap-btn")}>
          <button
            onClick={() => setCategory("all")}
            className={`${category === "all" ? styles.active : ""} ${
              styles.menu__btn
            }`}
          >
            All
          </button>
          <button
            onClick={() => setCategory("fast-food")}
            className={`${category === "fast-food" ? styles.active : ""} ${
              styles.menu__btn
            }`}
          >
            Fast Food
          </button>
          <button
            onClick={() => setCategory("drink")}
            className={`${category === "drink" ? styles.active : ""} ${
              styles.menu__btn
            }`}
          >
            Drinks
          </button>
          <button
            onClick={() => setCategory("snack-food")}
            className={`${category === "snack-food" ? styles.active : ""} ${
              styles.menu__btn
            }`}
          >
            Snack Food
          </button>
        </div>
        <ShoppingList category={category}/>
      </div>
    </section>
  );
};

export default Shopping;