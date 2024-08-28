import classNames from "classnames/bind";
import styles from "./Favourite.module.scss";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../images";
import { Link } from "react-router-dom";

const Favourite = () => {
  const cx = classNames.bind(styles);
  const { favourites } = useSelector((state) => state.favourite);

  return favourites.length === 0 ? <div className={cx("favourite__empty")}>No have food favourite, please add food favourite</div> : (
    <div className={cx("favourite__list")}>
      {favourites?.map((favourite, index) => (
        <Link to={`/shopping/${favourite._id}`} key={index} className={cx("favourite__item")}>
          <div className={cx("favourite__item-wrap-img")}>
            <div>
              <img
                className={cx("favourite__item-img")}
                src={favourite?.image.secure_url}
                alt=""
              />
            </div>
            <FontAwesomeIcon
              icon={faHeart}
              className={cx("favourite__heart")}
            />
          </div>
          <p className={cx("favourite__item-name")}>{favourite?.name}</p>
          <p className={cx("favourite__item-discount")}>
            Get a 20% Discount on First Order{" "}
          </p>
          <p className={cx("favourite__item-price")}>${favourite?.price}</p>
          <div className={cx("favourite__item-rate")}>
            <div className={cx("favourite__item-wrap-star")}>
              <img
                className={cx("favourite__item-star")}
                src={images.star_icon}
                alt=""
              />
              <img
                className={cx("favourite__item-star")}
                src={images.star_icon}
                alt=""
              />
              <img
                className={cx("favourite__item-star")}
                src={images.star_icon}
                alt=""
              />
              <img
                className={cx("favourite__item-star")}
                src={images.star_icon}
                alt=""
              />
              <img
                className={cx("favourite__item-star")}
                src={images.star_icon}
                alt=""
              />
            </div>
            <p className={cx("favourite__item-rate-content")}>{favourite.rate}</p>
          </div>
          <p className={cx("favourite__item-like")}>Like: {favourite.favouriteQuantity}</p>
          
        </Link>
      ))}
    </div>
  );
};

export default Favourite;
