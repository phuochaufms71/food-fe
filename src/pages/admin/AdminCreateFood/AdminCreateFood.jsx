/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./AdminCreateFood.module.scss";
import { useState } from "react";
import { ACCESS_TOKEN } from "../../../constants";
import { useDispatch } from "react-redux";
import { createFood } from "../../../redux/food/foodSlice";
import { images } from "../../../components/images/index.js";

const AdminCreateFood = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [image, setImage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    rate: '',
    description: ''
  })
  const handleSubmitFormCreateFood = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(createFood({
      accessToken,
      newFood: {formData, image}
    }))
    setFormData({
      name: '',
      category: '',
      price: '',
      rate: '',
      description: '',
    })
    setImage(false)
  }

  return (
    <div className={cx("create-food")}>
        <h3 className={cx("create-food__title")}>Create A Food</h3>
        <form onSubmit={handleSubmitFormCreateFood} className={cx("create-food__form")}>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="nameFood">Name</label>
              <input className={cx("create-food__input")} type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} id="nameFood"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="categoryFood">Category</label>
              <input className={cx("create-food__input")} type="text" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} id="categoryFood"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="priceFood">Price</label>
              <input className={cx("create-food__input")} type="text" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} id="priceFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
          <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")}>Image</label>
              <input id="image" className={cx("create-food__input")} type="file" onChange={(e) => setImage(e.target.files[0])} hidden/>
              <label htmlFor="image">
                <img className={cx("create-food__upload")} src={image ? URL.createObjectURL(image) : images.upload_img} alt="" />
              </label>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="rateFood">Rate</label>
              <input className={cx("create-food__input")} type="text" value={formData.rate} onChange={(e) => setFormData({...formData, rate: e.target.value})} id="rateFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="descFood">Description</label>
              <textarea rows={6} className={cx("create-food__textarea")} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} id="descFood"/>
            </div>
          </div>
          <div className={cx("create-food__footer")}>
            <p className={cx("create-food__note")}><span>Note:</span> Fill in the detailed name of your product. Then click the create button</p>
            <div className={cx("create-food__wrap-btn")}>
              <button className={cx("create-food__btn--cancel")}>Cancel</button>
              <button onClick={handleSubmitFormCreateFood} className={cx("create-food__btn--create")}>Create</button>
            </div>
          </div>
        </form>
    </div>
  )
};

export default AdminCreateFood;
