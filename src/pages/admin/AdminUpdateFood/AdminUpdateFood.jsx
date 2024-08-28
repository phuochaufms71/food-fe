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
  
  const [name, setName] = useState(selectedFood?.name || "");
  const [category, setCategory] = useState( selectedFood?.category || "");
  const [price, setPrice] = useState(selectedFood?.price || "");
  const [image, setImage] = useState(selectedFood?.image.secure_url || "");
  const [rate, setRate] = useState(selectedFood?.rate || "");
  const [description, setDescription] = useState(selectedFood?.description || "");

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage(reader.result)
      }
    } else {
      setImage("")
    }
  }

  const handleSubmitFormUpdateFood = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(updateFood({
      accessToken,
      id: selectedFood._id,
      updateData: {
        name,
        category,
        price,
        image,
        rate,
        description
      }
    }))
    await dispatch(getFoods(accessToken))
    setIdSelectedFood('');
    setIsUpdateFood(false);
    setName("")
    setCategory("")
    setImage("")
    setPrice("")
    setRate("")
    setDescription("")
    setShowAction(false)
  }

  return (
    <div className={cx("create-food")}>
        <h3 className={cx("create-food__title")}>Update A Food</h3>
        <form onSubmit={handleSubmitFormUpdateFood} className={cx("create-food__form")}>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="nameFood">Name</label>
              <input className={cx("create-food__input")} type="text" value={name} onChange={(e) => setName(e.target.value)} id="nameFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="categoryFood">Category</label>
              <input className={cx("create-food__input")} type="text" value={category} onChange={(e) => setCategory(e.target.value)} id="categoryFood"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="priceFood">Price</label>
              <input className={cx("create-food__input")} type="text" value={price} onChange={(e) => setPrice(e.target.value)} id="priceFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
          <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")}>
                <img className={cx("create-food__img")} src={image} alt="" />
                <input id="image" className={cx("create-food__input")} type="file" onChange={handleChangeImage} hidden/>
              </label>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="rateFood">Rate</label>
              <input className={cx("create-food__input")} type="text" value={rate} onChange={(e) => setRate(e.target.value)} id="rateFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="descFood">Description</label>
              <textarea rows={6} className={cx("create-food__textarea")} value={description} onChange={(e) => setDescription(e.target.value)} id="descFood"/>
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
