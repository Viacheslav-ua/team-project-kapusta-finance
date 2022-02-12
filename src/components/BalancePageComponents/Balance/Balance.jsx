import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import s from '../Balance/Balance.module.css';
import ModalBalance from '../ModalBalance';
import 'react-toastify/dist/ReactToastify.css';


export default function Balance() {
  const [balance, setBalance] = useState('');

  const onHandleChange = e => {
    setBalance(e.target.value);
  };
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

              <button
                className={`${s.confirm} ${s.btn}`}
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