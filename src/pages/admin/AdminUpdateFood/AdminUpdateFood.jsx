/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./AdminUpdateFood.module.scss";
import { useState } from "react";
import { ACCESS_TOKEN } from "../../../constants";
import { useDispatch } from "react-redux";
import { getFoods, updateFood } from "../../../redux/food/foodSlice.js";

const AdminUpdateFood = ({selectedFood, setIdSelectedFood, setIsUpdateFood, setShowAction}) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: selectedFood?.name || '',
    category: selectedFood?.category || '',
    price: selectedFood?.price || '',
    image: selectedFood?.image || '',
    rate: selectedFood?.rate || '',
    description: selectedFood?.description || ''
  })

  const handleSubmitFormUpdateFood = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(updateFood({
      accessToken,
      id: selectedFood._id,
      updateData: formData
    }))
    await dispatch(getFoods(accessToken))
    setIdSelectedFood('');
    setIsUpdateFood(false);
    setFormData({
      name: '',
      category: '',
      price: '',
      image: '',
      rate: '',
      description: '',
    })
    setShowAction(false)
  }

  return (
    <div className={cx("create-food")}>
        <h3 className={cx("create-food__title")}>Update A Food</h3>
        <form onSubmit={handleSubmitFormUpdateFood} className={cx("create-food__form")}>
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
              <label className={cx("create-food__label")}>Link image</label>
              <input id="image" className={cx("create-food__input")} type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
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
              <button onClick={() => setIsUpdateFood(false)}  className={cx("create-food__btn--cancel")}>Cancel</button>
              <button type="submit" className={cx("create-food__btn--create")}>Update</button>
            </div>
          </div>
        </form>
    </div>
  )
};

export default AdminUpdateFood;
