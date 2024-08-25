/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./Popular.module.scss";
import PopularList from "./PopularList/PopularList";
import { useEffect } from "react";
import Aos from "aos";

const Popular = () => {
    const cx = classNames.bind(styles);

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <section className={cx("popular")}>
            <div className={cx("container")}>
                <div className={cx("popular__inner")}>
                    <h3 className={cx("popular__title")} data-aos="fade-up" data-aos-duration="1000">Popular Dishes</h3>
                    <p className={cx("popular__desc")} data-aos="fade-up" data-aos-duration="1000">Odit id deserunt animi eligendi quibusdam soluta repudiandae, enim fugiat ut, tenetur nisi ea voluptatibus et.</p>
                    <PopularList />
                </div>
            </div>
        </section>

    )
}

export default Popular;
