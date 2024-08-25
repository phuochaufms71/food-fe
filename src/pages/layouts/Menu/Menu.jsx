import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { images } from "../../../components/images";

const Menu = () => {
    const cx = classNames.bind(styles);
    return (
        <section className={cx("menu")}>
            <div className={cx("container")}>
                <div className={cx("menu__inner")}>
                    <h3 className={cx("menu__title")}>Menu Food</h3>

                    {/* Burger */}
                    <div className={cx("menu__body")}>
                        <h4 className={cx("menu__body-title")}>Fast Food</h4>
                        <div className={cx("menu__content")}>
                            <div className={cx("menu__content-block")}>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Cheeseburger Deluxe</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$2.18</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Tandoori Chicken</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$2.4</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Pizza Tom</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$2.1</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Fried Chicken</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.4</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Pizza Seafood</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$5.2</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Caesar Salad</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$5.4</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Spaghetti with Bruised Beef</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$5.56</p>
                                </div>
                            </div>
                            <div className={cx("menu__content-block")}>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Tokbokki Fish</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$2</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Bacon cheese Sandwich</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.16</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Cheese Beef Hamburger</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$2.24</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Hot Dogs</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.56</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Soup</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.2</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Beef Steaks</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$5.8</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* Drinks */}
                    <div className={cx("menu__body")}>
                        <h4 className={cx("menu__body-title")}>Drinks</h4>
                        <div className={cx("menu__content")}>
                            <div className={cx("menu__content-block")}>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Coca Cola</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.7</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Coffee Milk</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$2</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Cappuccino</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Lychee Tea</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.8</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Mango Kumquat Tea</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.8</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Orange Juice</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.8</p>
                                </div>
                            </div>
                            <div className={cx("menu__content-block")}>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Strawberry Tea</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.92</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Guava Tea</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.8</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Pineapple Juice</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Black Pearl Tea</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.92</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Cantaloupe Juice</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.8</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Snack Food */}
                    <div className={cx("menu__body")}>
                        <h4 className={cx("menu__body-title")}>Snack Food</h4>
                        <div className={cx("menu__content")}>
                            <div className={cx("menu__content-block")}>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Fried Shrimp</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$2.3</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Goi cuon</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.5</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Mixed Rice Paper</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.5</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Cheese Sticks</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.8</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Cheese Shake Potatoes</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.6</p>
                                </div>
                            </div>
                            <div className={cx("menu__content-block")}>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Grilled Rice Paper</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.6</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Skewers</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.5</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Milk Tea</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$0.92</p>
                                </div>
                                <div className={cx("menu__content-wrap")}>
                                    <div className={cx("menu__content-gr")}>
                                        <p className={cx("menu__content-name")}>Fried Fish Balls</p>
                                        <p className={cx("menu__content-dot")}>.....................................................................</p>
                                    </div>
                                    <p className={cx("menu__content-price")}>$1.2</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className={cx("menu__burger-img")} src={images.burger_menu} alt="" />

                    <img className={cx("menu__pizza-img")} src={images.pizza_menu} alt="" />

                    <img className={cx("menu__coffee-img")} src={images.coffee_menu} alt="" />

                    <img className={cx("menu__ramen-img")} src={images.ramen_menu} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Menu;
