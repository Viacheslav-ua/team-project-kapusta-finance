import { useEffect, useState } from 'react';
import s from '../Balance/Balance.module.css';
import sprite from '../../Images/sprite.svg';
import ModalBalance from '../ModalBalance';


export default function Balance() {
  const [balance, setBalance] = useState('');

  const onHandleChange = e => {
    setBalance(e.target.value);
  };

  const [modalClose, setModalClose] = useState(true);
    const toggleModal = () => {
        setModalClose(!modalClose);
    };

  return (
    <div className={s.container}>
      <div className={s.containerLeft}>
        <a className={s.wrapperReports} href=" ">
          <button className={s.reports} >Перейти к отчетам
            <svg className={s.icon}>
              <use href={`${sprite}#diagram`}></use>
            </svg>
          </button>
        </a>
      </div>
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

              <button type="submit" className={`${s.confirm} ${s.btn}`}>
                ПОДТВЕРДИТЬ
              </button>
            </div>
          </div>
        </form>
      </div>
      {modalClose && <ModalBalance onClick={toggleModal} />}
    </div>
  );
}