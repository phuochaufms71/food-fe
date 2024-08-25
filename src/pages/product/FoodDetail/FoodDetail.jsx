/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./FoodDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getFoodDetail, getFoodFromStore } from "../../../redux/food/foodSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { images } from "../../../components/images";
import { addToCart } from "../../../redux/cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";

const FoodDetail = () => {
    const cx = classNames.bind(styles);
    const { id } = useParams();
    const food = useSelector(getFoodFromStore);
    const dispatch = useDispatch();

    const handleAddToCart = (food) => {
      dispatch(addToCart(food))
      toast.success('Add food to cart')
    }

    const fetchFoodDetail = async () => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);
      await dispatch(getFoodDetail({
        accessToken,
        id
      }))
    }

    useEffect(() => {
      fetchFoodDetail()
    }, [localStorage.getItem(ACCESS_TOKEN)])

    return (
      <section className={cx('food-detail')}>
        <div className={cx("container")}>
          <div className={cx("food-detail__inner")}>
            <div className={cx("food-detail__left")}>
                <div className={cx("food-detail__wrap-img")}>
                  <img className={cx("food-detail__img")} src={food?.image.secure_url} alt="" />
                  <img className={cx("food-detail__img")} src={food?.image.secure_url} alt="" />
                  <img className={cx("food-detail__img")} src={food?.image.secure_url} alt="" />
                  <img className={cx("food-detail__img")}src={food?.image.secure_url} alt="" />
                </div>
                <img className={cx("food-detail__thomnail")} src={food?.image.secure_url} alt="" />
            </div>
            <div className={cx("food-detail__right")}>
              <h2 className={cx("food-detail__name")}>{food?.name}</h2>
              <div className={cx("food-detail__row")}>
                <div className={cx("food-detail__wrap-star")}>
                  <img className={cx("food-detail__star")} src={images.star_icon} alt="" />
                  <img className={cx("food-detail__star")} src={images.star_icon} alt="" />
                  <img className={cx("food-detail__star")} src={images.star_icon} alt="" />
                  <img className={cx("food-detail__star")} src={images.star_icon} alt="" />
                  <img className={cx("food-detail__star")} src={images.star_icon} alt="" />
                </div>
                <p className={cx("food-detail__rate")}>{food?.rate}</p>
              </div>
              <p className={cx("food-detail__price")}>${food?.price}</p>
              <p className={cx("food-detail__desc")}>{food?.description}</p>
              <div>
                <button onClick={() => handleAddToCart(food)} className={cx("food-detail__addtocart")}>ADD TO CART</button>
                <ToastContainer />
              </div>

              <p className={cx("food-detail__category")}><span>Category:</span> {food?.category}</p>
              <p className={cx("food-detail__tags")}><span>Tags:</span> Best Seller</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default FoodDetail;
