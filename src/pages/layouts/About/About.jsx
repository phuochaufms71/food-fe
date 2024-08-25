import classNames from "classnames/bind"
import styles from "./About.module.scss";
import { images } from "../../../components/images";

const About = () => {
    const cx = classNames.bind(styles);
  return (
    <section className={cx("about")}>
        <div className={cx("container")}>
            <div className={cx("about__inner")}>
                <div className={cx("about__body")}>
                    <button className={cx("about__body-order-mobie")}>
                        Order Now
                    </button>
                    <div className={cx("about__body-left")}>
                        <div className={cx("about__body-wrap-img")}>
                            <img className={cx("about__body-img")} src={images.img_about_1} alt="" />
                            <img className={cx("about__body-img")} src={images.img_about_2} alt="" />
                        </div>
                        <div className={cx("about__body-wrap-img")}><img className={cx("about__body-img")} src={images.img_about_3} alt="" /></div>
                    </div>
                    <div className={cx("about__body-right")}>
                        <h3 className={cx("about__body-title")}>
                            About <span>LL&PH</span> Food
                        </h3>
                        <p className={cx("about__body-desc")}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laboriosam possimus eos natus maiores dolore! Neque consequatur porro odit dolores vero voluptatem omnis, cupiditate veniam itaque ab officiis quaerat qui.
                        </p>
                        <button className={cx("about__body-order")}>
                            Order Now
                        </button>
                    </div>
                    
                </div>

                <div className={cx("about__choose")}>
                    <h3 className={cx("about__choose-title")}>Why Choose <span>Our</span> Food</h3>
                    <p className={cx("about__choose-desc")}>
                        Nihil quisquam adipisci, cupiditate labore quibusdam magnam minima repellat id nulla odio, autem, perspiciatis cum corrupti vitae sint ex consequuntur voluptatum voluptates.
                    </p>
                    <div className={cx("about__choose-list")}>
                        <div className={cx("about__choose-item")}>
                            <img className={cx("about__choose-img")} src={images.dish_icon} alt="" />
                            <h4 className={cx("about__choose-item-title")}>
                                Delicious & Healthy Foods
                            </h4>
                            <p className={cx("about__choose-item-desc")}>
                                Perspiciatis sapiente qui, odit tenetur voluptates iusto sint nesciunt voluptate eius modi fugit libero sequi doloremque eaque autem maiores, nulla laborum esse.
                            </p>
                        </div>
                        <div className={cx("about__choose-item")}>
                            <img className={cx("about__choose-img")} src={images.fresh_icon} alt="" />
                            <h4 className={cx("about__choose-item-title")}>
                                Fresh Ingredients
                            </h4>
                            <p className={cx("about__choose-item-desc")}>
                                Facilis voluptatum adipisci consectetur, qui, porro illo aut mollitia, tempora cum illum nostrum! Soluta odio blanditiis ea exercitationem facilis iure, accusantium nobis?
                            </p>
                        </div>
                        <div className={cx("about__choose-item")}>
                            <img className={cx("about__choose-img")} src={images.best_price_icon} alt="" />
                            <h4 className={cx("about__choose-item-title")}>
                                Best Price & Offers
                            </h4>
                            <p className={cx("about__choose-item-desc")}>
                                Quo at recusandae libero dolor neque qui, provident, pariatur quia ullam rerum ad aliquid minima harum amet possimus. Vitae quae voluptates rem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx("about__brand")}>
                    <p className={cx("about__brand-desc")}>Dolor doloribus necessitatibus, quibusdam ducimus nesciunt, nulla aliquid hic voluptatum, nihil vitae commodi amet soluta aut? Distinctio ab dolorum amet obcaecati unde!</p>
                    <div className={cx("about__brand-list")}>
                        <img className={cx("about__brand-img")} src={images.brand_burger} alt="Burger" />
                        <img className={cx("about__brand-img")} src={images.brand_nestle} alt="Nestle" />
                        <img className={cx("about__brand-img")} src={images.brand_pepsi} alt="Pepsi" />
                        <img className={cx("about__brand-img")} src={images.brand_pringles} alt="Pringles" />
                        <img className={cx("about__brand-img")} src={images.brand_snicker} alt="Snicker" />
                    </div>
                    <p className={cx("about__brand-sub-desc")}>100+ Happy Sponsors with us</p>
                </div>

                <div className={cx("about__deliver")}>
                    <div className={cx("about__deliver-left")}>
                        <h3 className={cx("about__deliver-title")}>
                            We <span>Deliver</span> Quality Food
                        </h3>
                        <p className={cx("about__deliver-desc")}>
                            Delectus ipsa ullam illum quos, suscipit perferendis velit repellendus asperiores veniam, maxime dolor repudiandae rerum voluptas, eveniet tenetur incidunt facilis nesciunt porro.
                        </p>
                        <p className={cx("about__deliver-desc")}>
                            Delectus ipsa ullam illum quos, suscipit perferendis velit repellendus asperiores veniam, maxime dolor repudiandae rerum voluptas, eveniet tenetur incidunt facilis nesciunt porro.
                        </p>
                    </div>
                    <div className={cx("about__deliver-right")}>
                        <img className={cx("about__deliver-img")} src={images.burger_about} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;
