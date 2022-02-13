import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import s from "../Balance/Balance.module.css";
import ModalBalance from "../ModalBalance";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import { useFetchAllTransactionsMutation } from "../../../redux/services/transactionsAPI";
import { getAccessToken } from "../../../redux/auth/auth-selectors";
import * as actions from "../../../redux/finance/finance-actions";
import { getBalance } from "../../../redux/finance/finance-selectors";

export default function Balance() {
  const getDataBalance = useSelector(getBalance);
  const [balance, setBalance] = useState("");
  const accessToken = useSelector(getAccessToken);
  const [data] = useFetchAllTransactionsMutation();
  const dispatch = useDispatch();

  console.log(getDataBalance); /*Получаем все транзакции*/

  const sendDataInStore = useCallback(
    (response) => {
      dispatch(actions.balance(response.data.total));
    },
    [dispatch]
  );

  const getAllTransactions = useCallback(async () => {
    try {
      const result = await data(accessToken);
      console.log("result", result);
      sendDataInStore(result);
    } catch (error) {
      console.log(error);
    }
  }, [accessToken, data, sendDataInStore]);

  useEffect(() => {
    getAllTransactions();
  }, [getAllTransactions]);

  const onHandleChange = (e) => {
    setBalance(e.target.value);
  };

  return (
    <div className={s.container}>
      <div className={s.containerRight}>
        <form className={s.wrapperBalance}>
          <div className={s.form}>
            <p className={s.title}>Баланс:</p>
            <div className={s.wrapperBtn}>
              <input
                className={`${s.money} ${s.btn}`}
                name="balance"
                type="number"
                id="balanceId"
                onChange={onHandleChange}
                value={`${balance}`}
                placeholder="00.00 UAH"
              />
            </div>
          </div>
        </form>
      </div>
      {!+balance && <ModalBalance />}
    </div>
  );
}
