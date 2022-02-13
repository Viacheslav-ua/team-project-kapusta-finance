import { useState } from "react";
import { transactionsApi } from "../../../redux/services/transactionsAPI";
import { useDispatch } from "react-redux";
import Modal from "../../Multipurpose-modal/Multipurpose-modal";
import items from "./expenses.json";
import { getAllTransaction } from "../../../redux/finance/finance-selectors";
import sprite from "../../../Images/sprite.svg";
import s from "./TableBalance.module.css";

const TableBalance = ({ type, id }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const transaction = useSelector(getAllTransaction);
  
   const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const expenses = transaction.filter((el)=>el.isProfit===false);
  const income = transaction.filter((el)=>el.isProfit===true);
  
  return (
    <>
      <div className={s.tableHead}>
        <table className={s.tableMain}>
          <thead className={s.tableHeader}>
            <tr>
              <th className={`${s.tableTitle} ${s.thDate}`}>дата</th>
              <th className={`${s.tableTitle} ${s.thDescr}`}>описание</th>
              <th className={`${s.tableTitle} ${s.thCtg}`}>категория</th>
              <th className={`${s.tableTitle} ${s.thSum}`}>сумма</th>
              <th className={`${s.tableTitle} ${s.thIcon}`}></th>
            </tr>
          </thead>
        </table>

        <div className={s.tableBodyScroll}>
          {type==='expense'&&(
            <>
            <table className={`${s.tableMain} ${s.tableMainBody}`}>
            <tbody className={s.tableBody}>
              {expenses.map((el) => (
                <tr className={s.tableRow} key={el._id}>
                      <td className={s.thDate}>{el.dateTransaction.substr(0,10)}</td>
                      <td className={s.tdDescr}>{el.description}</td>
                      <td className={s.thCtg}>{el.categoryName}</td>
                      <td className={`${s.tdSum} ${s.tdSumExpense}`}>
                           {`-${el.amount.toLocaleString('ru')} грн.`}
                      </td>
                      <td className={s.thIcon}>
                        <button
                          className={s.deleteBtn}
                          type='button'
                          onClick={onOpenModal}
                        >
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
          </table>
            </>
          )}
          {type==='income'&&(
            <>
            <table className={`${s.tableMain} ${s.tableMainBody}`}>
            <tbody className={s.tableBody}>
              {income.map((el) => (
                <tr className={s.tableRow} key={el._id}>
                      <td className={s.thDate}>{el.dateTransaction.substr(0,10)}</td>
                      <td className={s.tdDescr}>{el.description}</td>
                      <td className={s.thCtg}>{el.categoryName}</td>
                      <td className={s.tdSum}>
                           {`${el.amount.toLocaleString('ru')} грн.`}
                      </td>
                      <td className={s.thIcon}>
                        <button
                          className={s.deleteBtn}
                          type='button'
                          onClick={onOpenModal}
                        >
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
          </table>
            </>
          )}

          {showModal === true && (
            <Modal
              questionText="Вы уверены?"
              onClickApproved={() =>
                dispatch(transactionsApi.deleteTransaction(id))
              }
              onClose={onCloseModal}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TableBalance;
