/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

const Contact = () => {
    const cx = classNames.bind(styles);
  return (
    <div className={cx("contact")}>
      <div className={cx("container")}>
        <h2 className={cx("contact__title")}>Contact</h2>
        <p className={cx("contact__sub-title")}>We'd love to hear from you</p>
        <p className={cx("contact__desc")}>Molestiae quaerat illo nihil cumque eum, quo veritatis in quasi error minima omnis, voluptatibus libero.</p>
        <div className={cx("contact__container")}>
          <div className={cx("contact__group")}>
            <i className="fa-solid fa-envelope"></i>
            <h3 className={cx("contact__group-field")}>Email</h3>
            <p className={cx("contact__group-desc")}>Our friendly team is here to help</p>
            <p className={cx("contact__group-content")}>phuochaubmw@gmail.com</p>
          </div>
          <div className={cx("contact__group")}>
            <i className="fa-solid fa-location-dot"></i>
            <h3 className={cx("contact__group-field")}>Office</h3>
            <p className={cx("contact__group-desc")}>Come say hello at our office</p>
            <p className={cx("contact__group-content")}>Long Thoi, Cho Lach, Ben Tre</p>
          </div>
          <div className={cx("contact__group")}>
            <i className="fa-solid fa-phone"></i>
            <h3 className={cx("contact__group-field")}>Phone</h3>
            <p className={cx("contact__group-desc")}>You can call us when you need to help</p>
            <p className={cx("contact__group-content")}>+84-364-500-846</p>
          </div>
        </div>
        <div className={cx("contact__spacer")}></div>

        <p className={cx("contact__sub-title")}>Get In Touch</p>
        <p className={cx("contact__desc")}>We'd love to hear from you. Please fill out this form</p>
        <form className={cx("contact__form")}>
          <div className={cx("contact__form-group")}>
            <label className={cx("contact__form-label")}>Full Name</label>
            <input type="text" className={cx("contact__form-input")} />
          </div>
          <div className={cx("contact__form-group")}>
            <label className={cx("contact__form-label")}>Email</label>
            <input type="email" className={cx("contact__form-input")} />
          </div>
          <div className={cx("contact__form-group")}>
            <label className={cx("contact__form-label")}>Message</label>
            <textarea rows={4} className={cx("contact__form-input")} />
          </div>
          <button className={cx("contact__form-submit")}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
