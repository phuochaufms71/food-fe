/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./ShoppingList.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../../../components/images/index.js";
import { Link } from "react-router-dom";
import { addToCart } from "../../../../redux/cart/cartSlice.js";
import 'react-toastify/dist/ReactToastify.css';
import PaginationFood from "../../../../components/Pagination/PaginationFood";
import { addFavouriteFood } from "../../../../redux/food/favouriteFoodSlice.js";
import { ToastContainer } from "react-toastify";

const ShoppingList = ({category}) => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const [favourite, setFavourite] = useState(false);
    const [idFood, setIdFood] = useState('');
    const itemsPerPage = 8;
    const [currentItems, setCurrentItems] = useState(null);
    const handleAddToCart = (food) => {
        dispatch(addToCart(food))
    }

    const handleAddFavouriteFood = (food) => {
        dispatch(addFavouriteFood(food))
    }

    return (
        <>
            <div className={cx("shopping__list")}>
                {
                    currentItems && currentItems?.map((food, index) => {
                        if (food.category === category || category === "all") {
                            return (
                                
                                    <div key={index} className={cx("shopping__item")}>
                                        <div className={cx("shopping__item-wrap-img")}>
                                            <Link to={`/shopping/${food._id}`}>
                                                <img className={cx("shopping__item-img")} src={food?.image.secure_url} alt="" />
                                            </Link>
                                            <FontAwesomeIcon onClick={() => {setFavourite(true); setIdFood(food?._id); handleAddFavouriteFood(food)}} icon={faHeart} className={`${idFood === food._id && favourite ? styles.active : "" } ${styles.shopping__heart}`} />
                                        </div>
                                        <p className={cx("shopping__item-name")}>{food?.name}</p>
                                        <p className={cx("shopping__item-discount")}>Get a 20% Discount on First Order </p>
                                        <p className={cx("shopping__item-price")}>${food?.price}</p>
                                        <div className={cx("shopping__item-rate")}>
                                            <div className={cx("shopping__item-wrap-star")}>
                                                <img className={cx("shopping__item-star")} src={images.star_icon} alt="" />
                                                <img className={cx("shopping__item-star")} src={images.star_icon} alt="" />
                                                <img className={cx("shopping__item-star")} src={images.star_icon} alt="" />
                                                <img className={cx("shopping__item-star")} src={images.star_icon} alt="" />
                                                <img className={cx("shopping__item-star")} src={images.star_icon} alt="" />
                                            </div>
                                            <p className={cx("shopping__item-rate-content")}>{food.rate}</p>
                                        </div>
                                        <div className={cx("shopping__item-wrap-btn")}>
                                            <Link to={`${food._id}`} className={cx("shopping__item-btn--readmore")}>Read More</Link>
                                            <div>
                                                <button onClick={() => handleAddToCart(food)} className={cx("shopping__item-btn--addtocart")}>
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    })
                }
            </div>
    
            <PaginationFood itemsPerPage={itemsPerPage} setCurrentItems={setCurrentItems} />

            <ToastContainer />
        </>
    )
}

export default ShoppingList;