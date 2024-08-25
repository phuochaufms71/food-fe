/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage, getMessages } from "../../../redux/message/messageSlice";
import { ACCESS_TOKEN } from "../../../constants";
import Aos from "aos";

const Contact = () => {
    const cx = classNames.bind(styles);
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState("Send Message");
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    })
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    const fetchMessage = () => {
      dispatch(getMessages(accessToken))
    }
    
    const handleSubmitMessage = async (e) => {
      e.preventDefault();
      setSubmit("Sending...");

      dispatch(createMessage({
        accessToken,
        newMessage: formData
      }))
      setSubmit("Send Message")
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    }

    useEffect(() => {
      Aos.init()
      fetchMessage()
    }, [localStorage.getItem(ACCESS_TOKEN)])
  return (
    <section className={cx("contact")}>
      <div className={cx("container")}>
        <div className={cx("contact__inner")}>
          <h2 className={cx("contact__title")}>Contact</h2>
          <p className={cx("contact__sub-title")} data-aos="fade-up" data-aos-duration="1000">We'd love to hear from you</p>
          <p className={cx("contact__desc")} data-aos="fade-up" data-aos-duration="1000">Molestiae quaerat illo nihil cumque eum, quo veritatis in quasi error minima omnis, voluptatibus libero.</p>
          <div className={cx("contact__container")}>
            <div className={cx("contact__group")} data-aos="fade-up" data-aos-duration="1000">
              <i className="fa-solid fa-envelope"></i>
              <h3 className={cx("contact__group-field")}>Email</h3>
              <p className={cx("contact__group-desc")}>Our friendly team is here to help</p>
              <a href="mailto: phuochaubmw@gmail.com" className={cx("contact__group-content")}>phuochaubmw@gmail.com</a>
              <a href="mailto: lamlinh10032007@gmail.com" className={cx("contact__group-content")}>(lamlinh10032007@gmail.com)</a>
            </div>
            <div className={cx("contact__group")} data-aos="fade-up" data-aos-duration="1000">
              <i className="fa-solid fa-location-dot"></i>
              <h3 className={cx("contact__group-field")}>Office</h3>
              <p className={cx("contact__group-desc")}>Come say hello at our office</p>
              <p className={cx("contact__group-content")}>Long Thoi, Cho Lach, Ben Tre</p>
              <p className={cx("contact__group-content")}>(Vinh Binh, Cho Lach, Ben Tre)</p>
            </div>
            <div className={cx("contact__group")} data-aos="fade-up" data-aos-duration="1000">
              <i className="fa-solid fa-phone"></i>
              <h3 className={cx("contact__group-field")}>Phone</h3>
              <p className={cx("contact__group-desc")}>You can call us when you need to help</p>
              <a href="tel: +84-364-500-846" className={cx("contact__group-content")}>+84-364-500-846</a>
              <a href="tel: +84-365-422-963" className={cx("contact__group-content")}>(+84-365-422-963)</a>
            </div>
          </div>
          <div className={cx("contact__spacer")} data-aos="fade-up" data-aos-duration="1000"></div>
  
          <p className={cx("contact__sub-title")} data-aos="fade-up" data-aos-duration="1000">Get In Touch</p>
          <p className={cx("contact__desc")} data-aos="fade-up" data-aos-duration="1000">We'd love to hear from you. Please fill out this form</p>
          <form className={cx("contact__form")} data-aos="fade-up" data-aos-duration="1000">
            <div className={cx("contact__form-group")}>
              <label className={cx("contact__form-label")}>Full Name</label>
              <input type="text" className={cx("contact__form-input")} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className={cx("contact__form-group")}>
              <label className={cx("contact__form-label")}>Email</label>
              <input type="email" className={cx("contact__form-input")} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className={cx("contact__form-group")}>
              <label className={cx("contact__form-label")}>Message</label>
              <textarea rows={4} className={cx("contact__form-input")} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}/>
            </div>
            <button onClick={handleSubmitMessage} className={cx("contact__form-submit")}>{submit}</button>
          </form>
          <div className={cx("contact__map")} data-aos="fade-up" data-aos-duration="1000">
            <h3 className={cx("contact__map-title")}>Address Us</h3>
            <iframe className={cx("contact__map-iframe")} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62821.74992381082!2d106.1419126283518!3d10.232572410432699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa040f4b227b7%3A0x109211722711d4cb!2zTG9uZyBUaOG7m2ksIENo4bujIEzDoWNoLCBC4bq_biBUcmUsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1724167497258!5m2!1svi!2s" width="600" height="450" style={{border:0}} loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
