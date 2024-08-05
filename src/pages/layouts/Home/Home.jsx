import classnames from "classnames/bind";
import Slider from "react-slick";
import styles from "./Home.module.scss";
import "../../../components/scss/GlobalStyle.scss";
import { images } from "../../../components/images/index.js";
import Popular from "../../../components/Popular/Popular";

const Home = () => {
  const cx = classnames.bind(styles);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  var settingsCategory = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className={cx("home")}>
      {/* <Header /> */}
      <div className={cx("container")}>
        <div className={cx("home__inner")}>
          <div className={cx("home__content")}>
            <div className={cx("home__content")}>
              <h2 className={cx("home__content--title")}>Welcome To Our <span className={cx("home__content--sub-title")}>LL&PH</span> Food</h2>
              <p className={cx("home__content--desc")}>Ratione repudiandae quis tempora id doloribus, eligendi natus, at ipsam temporibus quos neque ut, qui culpa autem officiis mollitia quam placeat praesentium</p>
              <div className={cx("home__content--btn")}>
                <button className={cx("home__content--btn-order")}>Order Now</button>
                <button className={cx("home__content--btn-book")}>Book a Food</button>
              </div>
            </div>
          </div>

          {/* Banner */}
          <section className={cx("home__banner")}>
            <Slider {...settings} style={{overFlow: "hidden",margin: "20px auto 30px"}}>
              <img className={cx("carousel__img")} src={images.banner_1} alt="First slide" />
              <img className={cx("carousel__img")} src={images.banner_2} alt="Second slide" />
              <img className={cx("carousel__img")} src={images.banner_3} alt="Third slide" />
            </Slider>
          </section>

          {/* Category */}
          <section className={cx("home__category")}>
            <div className={cx("home__category-top")}>
              <img className={cx("home__category-icon")} src={images.category_icon} alt="" />
              <h3 className={cx("home__category-title")}>Caregory</h3>
            </div>
            <Slider {...settingsCategory} className={cx("home__category-list-img")}>
              <div className={cx("home__category-wrap-img")}>
                <img className={cx("home__category-img")} src={images.pizza_icon} alt="pizza" />
                <p className={cx("home__category-name")}>Pizza</p>
              </div>
              <div className={cx("home__category-wrap-img")}>
                <img className={cx("home__category-img")} src={images.burger_icon} alt="burger" />
                <p className={cx("home__category-name")}>Burger</p>
              </div>
              <div className={cx("home__category-wrap-img")}>
                <img className={cx("home__category-img")} src={images.chicken_icon} alt="chicken" />
                <p className={cx("home__category-name")}>Chicken</p>
              </div>
              <div className={cx("home__category-wrap-img")}>
                <img className={cx("home__category-img")} src={images.ramen_icon} alt="ramen" />
                <p className={cx("home__category-name")}>Ramen</p>
              </div>
              <div className={cx("home__category-wrap-img")}>
                <img className={cx("home__category-img")} src={images.salad_icon} alt="salad" />
                <p className={cx("home__category-name")}>Salad</p>
              </div>
              <div className={cx("home__category-wrap-img")}>
                <img className={cx("home__category-img")} src={images.coffee_icon} alt="coffee" />
                <p className={cx("home__category-name")}>Coffee</p>
              </div>
              <div className={cx("home__category-wrap-img")}>
                <img className={cx("home__category-img")} src={images.cold_drink_icon} alt="cold-drink" />
                <p className={cx("home__category-name")}>Cold Drinks</p>
              </div>
            </Slider>
          </section>

          {/* About */}
          <section className={cx("home__about")}>
            <div className={cx("home__about-left")}>
              <img className={cx("home__about-img")} src={images.burger_about} alt="" />
            </div>
            <div className={cx("home__about-right")}>
              <h3 className={cx("home__about-title")}>About <span className={cx("home__about-sub-title")}>LL&PH</span> Food</h3>
              <p className={cx("home__about-desc")}>Fugiat, iste repudiandae dicta quo tempora debitis magnam facilis ex, harum, voluptate rem error obcaecati ad maxime assumenda vitae deleniti! Suscipit, explicabo!
              </p>
              <div className={cx("home__about-list")}>
                <div className={cx("home__about-item")}>
                  <img className={cx("home__about-item--check")} src={images.check_icon} alt="" />
                  <p className={cx("home__about-item--content")}>Delicious & Healthy Foods</p>
                </div>
                <div className={cx("home__about-item")}>
                  <img className={cx("home__about-item--check")} src={images.check_icon} alt="" />
                  <p className={cx("home__about-item--content")}>Best Burger & Offers</p>
                </div>
                <div className={cx("home__about-item")}>
                  <img className={cx("home__about-item--check")} src={images.check_icon} alt="" />
                  <p className={cx("home__about-item--content")}>Made By Fresh Ingredients</p>
                </div>
              </div>
              <div className={cx("home__about-wrap-btn")}>
                <button className={cx("home__about-btn--order")}>Order Now</button>
                <button className={cx("home__about-btn--read")}>Read More</button>
              </div>
            </div>
          </section>

          {/* Delivery */}
          <section className={cx("home__delivery")}>
            <div className={cx("home__delivery-content")}>
              <h3 className={cx("home__delivery--title")}>Order Online And Get Fast Delivery</h3>
              <p className={cx("home__delivery--desc")}>Nulla tenetur iste quisquam inventore, doloribus sunt blanditiis atque numquam iure! Amet corrupti fugiat repellat recusandae natus consequatur porro, est deleniti veniam.</p>
            </div>
            <div className={cx("home__delivery-wrap-img")}>
              <img className={cx("home__delivery-img")} src={images.delivery_icon} alt="" />
            </div>
          </section>

          <Popular />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Home;

