/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames/bind";
import styles from "./AdminCreateFood.module.scss";
import { useState } from "react";
import { ACCESS_TOKEN } from "../../../constants";
import { useDispatch } from "react-redux";
import { createFood } from "../../../redux/food/foodSlice.js";
import { images } from "../../../components/images/index.js";

const AdminCreateFood = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  const [foodImage, setFoodImage] = useState('');
  const [foodName, setFoodName] = useState('');
  const [foodCategory, setFoodCategory] = useState('');
  const [foodPrice, setFoodPrice] = useState('');
  const [foodRate, setFoodRate] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  
  const [isImage, setIsImage] = useState(false);

  const handleSubmitFormCreateFood = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(createFood({
      accessToken,
      newFood: {
        image: foodImage,
        name: foodName,
        category: foodCategory,
        price: foodPrice,
        rate: foodRate,
        description: foodDescription
      }
    }))
    setFoodImage(images.upload_img);
    setFoodName("");
    setFoodPrice("");
    setFoodRate("");
    setFoodCategory("");
    setFoodDescription("")
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setFoodImage(reader.result)
      }
    } else {
      setFoodImage("")
    }
    setIsImage(true)
  }

  return (
    <div className={cx("create-food")}>
        <h3 className={cx("create-food__title")}>Create A Food</h3>
        <form onSubmit={handleSubmitFormCreateFood} className={cx("create-food__form")}>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="nameFood">Name</label>
              <input className={cx("create-food__input")} type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} id="nameFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="categoryFood">Category</label>
              <input className={cx("create-food__input")} type="text" value={foodCategory} onChange={(e) => setFoodCategory(e.target.value)} id="categoryFood"/>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="priceFood">Price</label>
              <input className={cx("create-food__input")} type="text" value={foodPrice} onChange={(e) => setFoodPrice(e.target.value)} id="priceFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
          <div className={cx("create-food__form-group")}>
              <label htmlFor="image" className={cx("create-food__label")}>
                <div className={cx("create-food__wrap-img")}>
                  <img className={cx("create-food__img")} src={isImage ? foodImage : images.upload_img} alt="" />
                </div>
               
                <input id="image" className={cx("create-food__input")} type="file" onChange={handleChangeImage} hidden/>
              </label>
            </div>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="rateFood">Rate</label>
              <input className={cx("create-food__input")} type="text" value={foodRate} onChange={(e) => setFoodRate(e.target.value)} id="rateFood"/>
            </div>
          </div>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="descFood">Description</label>
              <textarea rows={6} className={cx("create-food__textarea")} value={foodDescription} onChange={(e) => setFoodDescription(e.target.value)} id="descFood"/>
            </div>
          </div>
          <div className={cx("create-food__footer")}>
            <p className={cx("create-food__note")}><span>Note:</span> Fill in the detailed name of your product. Then click the create button</p>
            <div className={cx("create-food__wrap-btn")}>
              <button className={cx("create-food__btn--cancel")}>Cancel</button>
              <button type="submit" className={cx("create-food__btn--create")}>Create</button>
            </div>
          </div>
        </form>
    </div>
  )
};

export default AdminCreateFood;
