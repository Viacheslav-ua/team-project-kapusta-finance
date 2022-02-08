import s from '../Balance/Balance.module.css';
import sprite from '../../Images/sprite.svg';


export default function Balance() {
  return (
    <div className={s.container}>
      <div className={s.containerLeft}>
        <div className={s.wrapperReports}>
          <div className={s.reports}>Перейти к отчетам</div>
          <svg className={s.icon}>
            <use href={`${sprite}#diagram`}></use>
          </svg>
        </div>
      </div>
      <div className={s.containerRight}>
        <div className={s.wrapperBalance}>
          <div className={s.title}>Баланс:</div>
        </div>
        <div className={s.wrapperBtn}>
          <button className={`${s.money} ${s.btn}`}>00.00 UAH</button>
          <button className={`${s.confirm} ${s.btn} ${s.activeBtn}`}>
            ПОДТВЕРДИТЬ
          </button>
        </div>
      </div>
    </div>
  );
}