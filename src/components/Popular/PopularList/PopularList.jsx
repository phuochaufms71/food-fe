/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./PopularList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { getFoods, getFoodsFromStore } from "../../../redux/food/foodSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import Aos from "aos";

const PopularList = () => {
  const cx = classNames.bind(styles);
  const { foods } = useSelector(getFoodsFromStore);
  const foodPopular = foods?.slice(0, 4);
  const dispatch = useDispatch();
  const [favourite, setFavourite] = useState(false);
  const [idFood, setIdFood] = useState("");

  const fetchFoods = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      await dispatch(getFoods(accessToken));
    }
  };

  const handleAddToCart = (food) => {
    dispatch(addToCart(food))
    toast.success('Add food to cart')
  }

  useEffect(() => {
    Aos.init()
    fetchFoods();
  }, [localStorage.getItem(ACCESS_TOKEN)]);

  return (
    <div className={cx("popular__list")}>
      {foodPopular?.map((food, index) => (
        <div key={index} className={cx("popular__item")} data-aos="fade-up" data-aos-duration="1000">
          <div className={cx("popular__item-wrap-img")}>
            <Link to={`/shopping/${food._id}`}>
              <img className={cx("popular__item-img")} src={food?.image.secure_url} alt="" />
            </Link>
            <FontAwesomeIcon
              onClick={() => {
                setFavourite((prev) => !prev);
                setIdFood(food?._id);
              }}
              icon={faHeart}
              className={`${
                idFood === food._id && favourite ? styles.active : ""
              } ${styles.popular__heart}`}
            />
          </div>
          <p className={cx("popular__item-name")}>{food?.name}</p>
          <p className={cx("popular__item-discount")}>
            Get a 20% Discount on First Order{" "}
          </p>
          <p className={cx("popular__item-price")}>${food?.price}</p>
          <div className={cx("popular__item-wrap-btn")}>
            <Link to={`/shopping/${food._id}`} className={cx("popular__item-btn--readmore")}>
              Read More
            </Link>
            <div>
              <button onClick={() => handleAddToCart(food)} className={cx("popular__item-btn--addtocart")}>
                Add To Cart
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularList;
