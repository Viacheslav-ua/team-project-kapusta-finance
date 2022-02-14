import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "../Balance/Balance.module.css";
import ModalBalance from "../ModalBalance";

import { useFetchResetBalanceMutation } from "../../../redux/services/transactionsAPI";
import { getAccessToken } from "../../../redux/auth/auth-selectors";
import * as actions from "../../../redux/finance/finance-actions";
import { getBalance } from "../../../redux/finance/finance-selectors";

export default function Balance({page}) {
  const balance = useSelector(getBalance);
  // const [balance, setBalance] = useState("");
  // const accessToken = useSelector(getAccessToken);
  // const [fetchResetBalance] = useFetchResetBalanceMutation();
  // const dispatch = useDispatch();

  const onHandleChange = useCallback(async (e) => {
    // setBalance(e.target.value);
    // const balance = {balance: e.target.value}
    // try {
    //   const response = await fetchResetBalance(accessToken, balance)
    //   // dispatch(actions.balance(response))
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(e.target.value);
  }, []) 

  const clickOnBtn = e => {
    e.preventDefault();
      const valueInput = e.target.value;
    if (!valueInput) {
      toast.error('Пожалуйста, введите правильное значение!');
    }
  };

  return (
    <div className={s.container}>
      <div className={s.containerRight}>
        <h2 className={s.title}>Баланс:</h2>
        <form className={s.wrapperBalance}>
          <div className={s.form}>
            <div className={s.wrapperBtn}>
              <input
                className={`${s.money} ${s.btn} ${page !== 'balance' && s.reportPageInput}`}
                name="balance"
                type="number"
                id="balanceId"
                onChange={onHandleChange}
                // value={`${balance}`}
                placeholder={`${balance} UAH`}
              />
              <button
            className={`${s.confirm} ${s.btn} ${page !== 'balance' && s.reportPagedisplay}`}
            type="submit"
            onClick={clickOnBtn}
        >
            ПОДТВЕРДИТЬ
        </button>
            </div>
          </div>
        </form>
      </div>
      {!+balance && <ModalBalance />}
    </div>
  );
}
