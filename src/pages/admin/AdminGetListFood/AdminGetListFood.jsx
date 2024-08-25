/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import styles from "./AdminGetListFood.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFood,
  getFoods,
  getFoodsFromStore,
} from "../../../redux/food/foodSlice";
import { ACCESS_TOKEN } from "../../../constants";
import { useEffect, useMemo, useState } from "react";
import { images } from "../../../components/images";
import ModalDelete from "../../../components/Modal/ModalDelete/ModalDelete";
import AdminUpdateFood from "../AdminUpdateFood/AdminUpdateFood";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AdminGetListFood = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const { foods } = useSelector(getFoodsFromStore);
  const [showAction, setShowAction] = useState(false);
  const [id, setId] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idSelectedFood, setIdSelectedFood] = useState("");
  const [isUpdateFood, setIsUpdateFood] = useState(false);
  const [showDetailFood, setShowDetailFood] = useState(false);

  const fetchFoods = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      dispatch(getFoods(accessToken));
    }
  };

  const selectedFood = useMemo(() => {
    return foods.find((foodSelect) => foodSelect._id === idSelectedFood) || {};
  }, [foods, idSelectedFood]);

  const handleDeleteFood = async (foodId) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    await dispatch(
      deleteFood({
        accessToken,
        id: foodId,
      })
    );
    await dispatch(getFoods(accessToken));
    setId("");
    setShowAction(false);
  };

  useEffect(() => {
    fetchFoods();
  }, [localStorage.getItem(ACCESS_TOKEN)]);

  return (
    <>
      {isUpdateFood && (
        <AdminUpdateFood
          selectedFood={selectedFood}
          setIdSelectedFood={setIdSelectedFood}
          setIsUpdateFood={setIsUpdateFood}
          setShowAction={setShowAction}
        />
      )}
      {
        foods.length === 0 ? <div className={cx("get-list-food__empty")}>Food list is empty, <span>create food now</span></div> : <div className={cx("get_list_food")}>
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

                {foods?.map((food, index) => {
                  return (
                    <tbody key={index}>
                      <tr className={cx("get_list_food__th")}>
                        <td className={cx("get_list_food__td")}>
                          <img
                            className={cx("get_list_food__img")}
                            src={food?.image.secure_url}
                            alt=""
                          />
                        </td>
                        <td className={cx("get_list_food__td")}>{food?.name}</td>
                        <td className={cx("get_list_food__td")}>
                          {food?.category}
                        </td>
                        <td className={cx("get_list_food__td")}>${food?.price}</td>
                        <td className={cx("get_list_food__td")}>{food?.rate}</td>
                        <td className={cx("get_list_food__td")}>
                          <div className={cx("get_list_food__wrap")}>
                            <img
                              onClick={() => {
                                setId(food?._id);
                                setShowAction(true);
                              }}
                              className={cx("get_list_food__more")}
                              src={images.three_dots_icon}
                              alt=""
                            />
                            {id === food?._id && showAction && (
                              <div className={cx("get_list_food__action")}>
                                <div
                                  onClick={() => {
                                    setIsUpdateFood(true);
                                    setIdSelectedFood(food?._id);
                                  }}
                                  className={cx("get_list_food__item")}
                                >
                                  <img
                                    className={cx("get_list_food__item-img")}
                                    src={images.edit_icon}
                                    alt="edit icon"
                                  />
                                  Update
                                </div>
                                <div
                                  onClick={() => {
                                    setShowModalDelete(true);
                                  }}
                                  className={cx("get_list_food__item")}
                                >
                                  <img
                                    className={cx("get_list_food__item-img")}
                                    src={images.delete_icon}
                                    alt="delete icon"
                                  />
                                  Delete
                                </div>
                                {showModalDelete && (
                                  <ModalDelete
                                    food={food}
                                    setShowModalDelete={setShowModalDelete}
                                    setShowAction={setShowAction}
                                    handleDeleteFood={handleDeleteFood}
                                  />
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      }

      {/* get lists food in mobie */}
      <div className={cx("get-list-food-mobie")}>
        <div className={cx("get-list-food-mobie__wrap")}>
          <div className={cx("get-list-food-mobie__head")}>
            <span className={cx("get-list-food-mobie__th")}></span>
            <span className={cx("get-list-food-mobie__th")}>Image</span>
            <span className={cx("get-list-food-mobie__th")}>Name</span>
            <span className={cx("get-list-food-mobie__th")}>Action</span>
          </div>

          {foods?.map((food, index) => (
            <div key={index} >
              <div className={cx("get-list-food-mobie__content")}>
                <div className={cx("get-list-food-mobie__td")}>
                  <FontAwesomeIcon
                    onClick={() => {
                      setId(food?._id);
                      setShowDetailFood(() => id === food?._id ? !showDetailFood : !showDetailFood);
                    }}
                    className={`${
                      showDetailFood && id === food?._id ? styles.showFood : ""
                    } ${styles.get_list_food_mobie__icon}`}
                    icon={faChevronRight}
                  />
                </div>
                <div className={cx("get-list-food-mobie__td")}>
                  <img
                    className={cx("get-list-food-mobie__img")}
                    src={food?.image}
                    alt=""
                  />
                </div>
                <p className={cx("get-list-food-mobie__name")}>{food?.name}</p>
  
                  <div className={cx("get_list_food__wrap")}>
                    <div className={cx("get-list-food-mobie__td")}>
                      <img
                        onClick={() => {
                          setId(food?._id);
                          setShowAction(true);
                        }}
                        className={cx("get-list-food-mobie__more")}
                        src={images.three_dots_icon}
                        alt=""
                      />
                    </div>
                    {id === food?._id && showAction && (
                      <div className={cx("get-list-food-mobie__action")}>
                        <div
                          onClick={() => {
                            setIsUpdateFood(true);
                            setIdSelectedFood(food?._id);
                          }}
                          className={cx("get-list-food-mobie__item")}
                        >
                          <img
                            className={cx("get-list-food-mobie__item-img")}
                            src={images.edit_icon}
                            alt="edit icon"
                          />
                          Update
                        </div>
                        <div
                          onClick={() => {
                            setShowModalDelete(true);
                          }}
                          className={cx("get-list-food-mobie__item")}
                        >
                          <img
                            className={cx("get-list-food-mobie__item-img")}
                            src={images.delete_icon}
                            alt="delete icon"
                          />
                          Delete
                        </div>
                        {showModalDelete && (
                          <ModalDelete
                            food={food}
                            setShowModalDelete={setShowModalDelete}
                            setShowAction={setShowAction}
                            handleDeleteFood={handleDeleteFood}
                          />
                        )}
                      </div>
                    )}
                  </div>
              </div>
            
              {showDetailFood && id === food?._id && (
                <div className={cx("get-list-food-mobie__list")}>
                  <p className={cx("get-list-food-mobie__item")}>
                    <span>Name:</span> {food?.name}</p>
                  <p className={cx("get-list-food-mobie__item")}><span>Category:</span> {food?.category}</p>
                  <p className={cx("get-list-food-mobie__item")}><span>Price:</span> {food?.price}</p>
                  <p className={cx("get-list-food-mobie__item")}><span>Rate:</span> {food?.rate}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminGetListFood;
