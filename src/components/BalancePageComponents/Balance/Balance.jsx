import React from 'react';
import { useState } from 'react';
import s from '../Balance/Balance.module.css';
import ModalBalance from '../ModalBalance';
import ConfirmButton from '../ConfirmButton/ConfirmButton';

export default function Balance() {
  const [balance, setBalance] = useState('');

  const onHandleChange = e => {
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