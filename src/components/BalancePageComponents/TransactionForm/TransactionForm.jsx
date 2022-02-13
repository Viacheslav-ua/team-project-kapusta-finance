import { useState, useEffect } from "react";
import ru from "date-fns/locale/ru";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import { expenseOptions } from "../../../helpers/expencesOptions";
import { incomeOptions } from "../../../helpers/incomeOptions";
import DropDownList from "../DropDownList/DropDownList";
import style from "./TransitionForm.module.css";
import sprite from "../../../Images/sprite.svg";

registerLocale("ru", ru);

function TransactionForm({ type }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const viewPort = useWindowDimensions();

  useEffect(() => {
    const checkClick = (e) => {
      if (open) {
        setOpen(false);
      }
    };
    document.addEventListener("click", checkClick);
    return () => {
      document.removeEventListener("click", checkClick);
    };
  }, [open]);

  return (
    <div className={style.allContainer}>
      <form className={style.form}>
        <div className={style.inputContainer}>
          <div className={style.calendarTransactionForm}>
            <div className={style.formContainer}>
              {viewPort.width >= 768 && (
                <>
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
                </>
              )}
            </div>

            <div className={style.inputTransactionContainer}>
              <div className={style.inputWrapper}>
                <input
                  className={style.input}
                  placeholder={
                    type === "expense" ? "Описание товара" : "Описание дохода"
                  }
                />
                {/* {errors.name && <p>Обязательное поле</p>} */}
              </div>
              <div className={style.categoryArrowContainer}>
                <div className={style.category}>
                  <input
                    className={style.inputCategoty}
                    readOnly
                    onClick={() => setOpen(!open)}
                    placeholder={
                      type === "expense"
                        ? "Категория товара"
                        : "Категория дохода"
                    }
                  />
                </div>
                {open ? (
                  <div className={style.icon}>
                    <svg className={style.arrowUp}>
                      <use href={`${sprite}#arrow`}></use>
                    </svg>
                  </div>
                ) : (
                  <div className={style.icon}>
                    <svg className={style.arrowDown}>
                      <use href={`${sprite}#arrow`}></use>
                    </svg>
                  </div>
                )}
              </div>
              {open && (
                <DropDownList
                  type={type}
                  options={type === "expense" ? expenseOptions : incomeOptions}
                />
              )}

              <div className={style.valueContainer}>
                <input
                  placeholder={viewPort.width >= 768 ? "0,00" : "00,00 UAH"}
                  className={style.inputValue}
                />
                <svg className={style.calculator}>
                  <use href={`${sprite}#calculator`}></use>
                </svg>
              </div>
            </div>
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
