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
                  <p className={`${s.tdSum} ${type !== 'income' && s.tdSumExpense}`}
                    // style={
                    //   type === 'income'
                    //     ? { color: '#407946' }
                    //     : { color: '#E7192E' }
                    // }
                  >
                    {type === 'income'
                      ? `${el.sum}.00 грн.`
                      : `- ${el.sum}.00 грн.`}
                  </p>
                </div>
                {/* <div className={s.buttonWrapper}> */}
                    <button className={s.deleteBtn}>
                      <svg className={s.icon}>
                        <use
                          href={sprite + "#delete"}
                          alt="delete transaction"
                        />
                      </svg>
                    </button>
                {/* </div> */}
              </li>
            </div>
          ))}
        </ul>
          {/* <table className={s.tableMain}>
            <tbody className={s.tableBody}>
              {items.map((el) => (
                <tr className={s.tableRow} key={el.id}>
                  <div>
                    <td className={s.tdDate}>{el.descr}{el.date}</td>
                    <td className={s.tdCtg}>{el.category}</td>
                  </div>
                  <td className={`${s.tdSum} ${type !== 'income' && s.tdSumExpense}`}>
                    {type === 'income'
                      ? `${el.sum.toLocaleString('ru')}.00 грн.`
                      : `-${el.sum.toLocaleString('ru')}.00 грн.`}
                  </td>
                  <td className={s.tdIcon}>
                    <button className={s.deleteBtn}>
                      <svg className={s.icon}>
                        <use
                          href={sprite + "#delete"}
                          alt="delete transaction"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
      </div>
    </>
  );
  
};

export default TableBalanceMob;