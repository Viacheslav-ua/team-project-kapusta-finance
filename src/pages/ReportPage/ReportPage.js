
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReportsBalance from "../../components/Reports/ReportsBalance";
import MultipleSlider from "../../components/Reports/MultipleSlider/MultipleSlider";
import CurrentPeriod from "../../components/Reports/CurrentPeriod/CurrentPeriod";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Balance from "../../components/BalancePageComponents/Balance/Balance";
import ConfirmButton from "../../components/BalancePageComponents/ConfirmButton/ConfirmButton";
import style from "./ReportPage.module.css";
import s from "./bg.module.css";
import sprite from "../../Images/sprite.svg";

import {useFetchCategoryProfitMutation,useFetchCategoryCostsMutation} from '../../redux/services/reportAPI'
import { getAccessToken } from "../../redux/auth/auth-selectors";
import * as actions from "../../redux/report/report-actions";



const ReportPage = () => {
   const accessToken = useSelector(getAccessToken);
  const viewPort = useWindowDimensions();
  const dispatch = useDispatch();
  const [date, setDate] = useState('2022-01')
  const [fetchCategoryCosts] = useFetchCategoryCostsMutation();
  const [fetchCategoryProfit] = useFetchCategoryProfitMutation();
 
  
   const sendDataInStore = useCallback(
     (response, category) => {
       switch (category) {
         case 'cost':
           dispatch(actions.categoryCosts(response.data))
           break;
         case 'profit':
           dispatch(actions.categoryProfit(response.data))
           break;
         default: return;
       }
    },
    [dispatch]
  )

  const getCosts = useCallback(async () => {
    try {
      const response = await fetchCategoryCosts({ accessToken, date })

      sendDataInStore(response, 'cost')
    } catch (error) {
      console.log(error);
    }
  }, [])

    const getProfit = useCallback(async () => {
    try {
      const response = await fetchCategoryProfit({ accessToken, date })
      sendDataInStore(response, 'profit')
    } catch (error) {
      console.log(error);
    }
  }, [])
 

  useEffect(() => {
    getCosts();
    getProfit();
  }, [])
 
  return (

    <div className={s.bg_contaiter}>
    <div className={style.topWrapper}>
          <NavLink to="/balance" className={style.report}>
            <svg className={style.icon}>
              <use href={sprite + "#arrow"} alt="Go back" />
            </svg>
            <p className={style.linkText}>{viewPort.width > 767 && 'Вернуться на главную'}</p>
        </NavLink>
            {viewPort.width >= 220 && viewPort.width < 768 && (
              <>
                <div className={style.balance}>
                  <Balance />
                </div>
              </>
            )}
            {viewPort.width >= 768 && viewPort.width < 1279 && (
              <>
                <div className={style.balance}>
                  <Balance />
                </div>
              </>
            )}
            {viewPort.width >= 1280 && (
              <>
                <div className={style.balance}>
                  <Balance />
                  <ConfirmButton />
                </div>
              </>
            )}
          <CurrentPeriod />
        </div>
      <ReportsBalance />
      <div className={style.bottomWrapper}>
        <MultipleSlider />

      </div>
      </div>
  );
};

export default ReportPage;
