
import { createPortal } from 'react-dom';

import sprite from '../../Images/sprite.svg';

import style from './Modal.module.css';



const Modal = () => {
  
  return (
    <div className={style.overlay} >
      <div className={style.modal}>
        <button className={style.closeBtn} >
          <svg className={style.icon}>
            <use href={`${sprite}#close`}></use>
          </svg>
        </button>
        <p className={style.text}>Вы действительно хотите выйти?</p>
        <div className={style.btnBlock}>
          <button className={style.btn} >
            Да
          </button>
          <button className={style.btn} >
            Нет
          </button>
        </div>
      </div>
    </div>
  )
   
  
};

export default Modal;