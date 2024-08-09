/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./AdminGetListFood.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, getFoods, getFoodsFromStore } from "../../../redux/food/foodSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { useEffect, useState } from "react";
import { images } from "../../../components/images";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/Modal/ModalDelete/ModalDelete";

const AdminGetListFood = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const { foods } = useSelector(getFoodsFromStore);
  const [showAction, setShowAction] = useState(false);
  const [id, setId] = useState('');
  const [showModalDelete, setShowModalDelete] = useState(false);

  const fetchFoods = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      dispatch(getFoods(accessToken))
    }
  }

  const handleDeleteFood = async (foodId) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(deleteFood({
      accessToken,
      id: foodId
    }))
  }

  useEffect(() => {
    fetchFoods()
  }, [localStorage.getItem(ACCESS_TOKEN)])

  return (
    <div className={cx("get_list_food")}>
      <div className={cx("container")}>
        <div className={cx("get_list_food__inner")}>
          <h2 className={cx("get_list_food__title")}>List Foods</h2>
          <table className={cx("get_list_food__table")}>
            <thead>
              <tr className={cx("get_list_food__head")}>
                <th className={cx("get_list_food__th")}>Image</th>
                <th className={cx("get_list_food__th")}>Name</th>
                <th className={cx("get_list_food__th")}>Catogory</th>
                <th className={cx("get_list_food__th")}>Price</th>
                <th className={cx("get_list_food__th")}>Rate</th>
                <th className={cx("get_list_food__th")}>Action</th>
              </tr>
            </thead>
            {
              foods.map((food, index) => {
                return (
                  <tbody key={index}>
                  <tr className={cx("get_list_food__th")}>
                    <td className={cx("get_list_food__td")}>
                      <img className={cx("get_list_food__img")} src={food.image} alt="" />
                    </td>
                    <td className={cx("get_list_food__td")}>{food.name}</td>
                    <td className={cx("get_list_food__td")}>{food.category}</td>
                    <td className={cx("get_list_food__td")}>{food.price}</td>
                    <td className={cx("get_list_food__td")}>{food.rate}</td>
                    <td className={cx("get_list_food__td")}>
                      <div className={cx("get_list_food__wrap")}>
                        <img onClick={() => {setId(food._id); setShowAction(prev => !prev)}} className={cx("get_list_food__more")} src={images.three_dots_icon} alt="" />
                        {id === food._id && showAction && <div className={cx("get_list_food__action")}>
                          <Link to="/admin-food/update" className={cx("get_list_food__item")}>
                            <img className={cx("get_list_food__item-img")} src={images.edit_icon} alt="edit icon" />
                            Update
                          </Link>
                          <div onClick={() => {setShowModalDelete(true); handleDeleteFood(food._id)}} className={cx("get_list_food__item")}>
                            <img className={cx("get_list_food__item-img")} src={images.delete_icon} alt="delete icon" />
                            Delete
                          </div>
                          {showModalDelete && <ModalDelete setShowModalDelete={setShowModalDelete} />}
                        </div>}
                      </div>
                    </td>
                  </tr>
                  </tbody>
                )
              })
            }
          </table>
        </div>
      </div>
    </div>
  )
};

export default AdminGetListFood;
