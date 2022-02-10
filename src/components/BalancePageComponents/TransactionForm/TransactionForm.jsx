import { useState, useEffect } from "react";
import ru from "date-fns/locale/ru";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import DropDownList from "../DropDownList/DropDownList";
import style from "./TransitionForm.module.css";
import sprite from "../../../Images/sprite.svg";

registerLocale("ru", ru);

function TransactionForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className={style.allContainer}>
      <form className={style.form}>
        <div className={style.inputContainer}>
          <div className={style.formContainer}>
            <svg className={style.calendar}>
              <use href={`${sprite}#calendar`}></use>
            </svg>
            <DatePicker
              type="date"
              locale="ru"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd.MM.yyyy"
              // maxDate={new Date()}
              className={style.inputeDate}
            />
          </div>
          <div className={style.inputWrapper}>
            <input className={style.input} />
            {/* {errors.name && <p>Обязательное поле</p>} */}
          </div>
          <div className={style.category}>
            <input className={style.inputCategoty} />
          </div>
          <div className={style.valueContainer}>
            <input placeholder="0,00" className={style.inputValue} />
            <svg className={style.calculator}>
              <use href={`${sprite}#calculator`}></use>
            </svg>
          </div>
          <div className={style.btnContainer}>
            <button type="submit" className={style.formBtn}>
              Ввод
            </button>
            <button type="button" className={style.formBtn}>
              Очистить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
