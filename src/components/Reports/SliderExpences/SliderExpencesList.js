
import { useEffect, useState, useCallback } from "react";
import { useSelector,useDispatch} from 'react-redux';
import { useFetchCategoryItemsMutation } from '../../../redux/services/reportAPI'
import { getAccessToken } from "../../../redux/auth/auth-selectors";
import * as actions from "../../../redux/report/report-actions";
import sprite from '../../../Images/sprite.svg'
import style from './SliderExpences.module.css'


export default function SliderExpencesList({ data }) {
    const accessToken = useSelector(getAccessToken);
    const dispatch = useDispatch();
    const date = '2022-01-01'
    const [fetchCategoryItems] = useFetchCategoryItemsMutation();

      const sendDataInStore = useCallback(
          (response) => {
              dispatch(actions.categoryItems(response.data))
          },
    [dispatch]
    )
    
      const getItems = useCallback(async (categoryId) => {
    try {
      const response = await fetchCategoryItems({ accessToken, categoryId})

      sendDataInStore(response)
    } catch (error) {
      console.log(error);
    }
  }, [accessToken, fetchCategoryItems, sendDataInStore])

 

    return (
        <ul className={style.expencesList}>
            {data.map(({ _id: {categoryId,categoryName}, totalAmount }) => {
                return (
                <li
                    key={categoryId}
                    className={style.expencesItem}>
                    <p className={style.amount}>{ totalAmount}</p>
                <div className={style.iconWrapper} onClick={() => getItems(categoryId)}><svg className={style.icon}>
          <use href={sprite + `#${categoryName}`} alt="My logo" />
                </svg></div>
                <p className={style.expencesType}>{ categoryName}</p>
                    </li> 
                )
            })}
        </ul>
    )
}