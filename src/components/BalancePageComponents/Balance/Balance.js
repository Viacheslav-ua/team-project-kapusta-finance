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
  const [resBalance, setResBalance] = useState('');
  const accessToken = useSelector(getAccessToken);
  const [fetchResetBalance] = useFetchResetBalanceMutation();
  const dispatch = useDispatch();

  const onHandleChange = e => {
    const inputValue = e.currentTarget.value;
    setResBalance(inputValue);
  };
  

     
      
//       const onClickApprove = useCallback(async () => {
//         e.preventDefault();
//         if (!inputValue) {
//          return toast.error('Пожалуйста, введите правильное значение!');
//         };
//         if (inputValue.trim() === '') {
  
// }

//   })

  return (
    <div className={s.container}>
      <div className={s.containerRight}>
        <h2 className={s.title}>
          Баланс:
        </h2>

        <form className={s.wrapperBalance}
          // onSubmit={onClickApprove}
        >
          <div className={s.form}>
            <div className={s.wrapperBtn}>
              <input
                className={`${s.money} ${s.btn} ${page !== 'balance' && s.reportPageInput}`}
                name="balance"
                type="number"
                id="balanceId"
                onChange={onHandleChange}
                placeholder={`${balance} UAH`}
              />
              <button
            className={`${s.confirm} ${s.btn} ${page !== 'balance' && s.reportPagedisplay}`}
            type="submit"
            
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
