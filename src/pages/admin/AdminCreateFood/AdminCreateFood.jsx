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
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   category: '',
  //   price: '',
  //   image: '',
  //   rate: '',
  //   description: ''
  // })
  const formData = new FormData();
  formData.append("name", name)
  formData.append("category", category)
  formData.append("price", price)
  formData.append("image", image)
  formData.append("rate", rate)
  formData.append("description", description)
  const handleSubmitFormCreateFood = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(createFood({
      accessToken,
      newFood: formData
    }))
    setImage(false)
    setName("")
    setCategory("")
    setPrice("")
    setRate("")
    setDescription("")
  }

  return (
    <div className={cx("create-food")}>
        <h3 className={cx("create-food__title")}>Create A Food</h3>
        <form onSubmit={handleSubmitFormCreateFood} className={cx("create-food__form")}>
          <div className={cx("create-food__form-block")}>
            <div className={cx("create-food__form-group")}>
              <label className={cx("create-food__label")} htmlFor="nameFood">Name</label>
              <input className={cx("create-food__input")} type="text" value={name} onChange={(e) => setName(e.target.value)} id="nameFood"/>
            </div>
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
              <label className={cx("create-food__label")}>Image</label>
              <input id="imgUpload" className={cx("create-food__input")} type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" hidden/>
              <label htmlFor="imgUpload">
                <img className={cx("create-food__upload")} src={image ? URL.createObjectURL(image) : images.upload_img} alt="" />
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
              <textarea rows={6} className={cx("create-food__textarea")} value={formData.description} onChange={(e) => setDescription(e.target.value)} id="descFood"/>
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
