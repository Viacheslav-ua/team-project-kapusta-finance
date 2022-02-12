import items from "./expenses.json";
import sprite from "../../../Images/sprite.svg";
import s from './TableBalanceMob.module.css';

const TableBalanceMob = ({type}) => {

  return (
    <>
      <div className={s.tableBodyScroll}>
        <ul className={s.tableWrapper}>
          {items.map((el) => (
            <div className={s.tableRowContainer} key={el.id}>
              <li className={s.tableRow}>
                <div className={s.tableItemWrapper}>
                  <p className={s.tdDescr}>
                    {el.descr}
                  </p>
                  <div className={s.dateCategoryWrapper}>
                    <p className={s.tdDate}>{el.date}</p>
                    <p className={s.tdCtg}>
                      {el.category}
                    </p>
                  </div>
                </div>
                <div className={s.tablesumWrapper}>
                  <p className={`${s.tdSum} ${type !== 'income' && s.tdSumExpense}`}>
                    {type === 'income'
                      ? `${el.sum}.00 грн.`
                      : `- ${el.sum}.00 грн.`}
                  </p>
                </div>

                    <button className={s.deleteBtn}>
                      <svg className={s.icon}>
                        <use
                          href={sprite + "#delete"}
                          alt="delete transaction"
                        />
                      </svg>
                    </button>

              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
  
};

export default TableBalanceMob;