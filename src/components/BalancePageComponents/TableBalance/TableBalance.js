import { useState } from "react";
import { transactionsApi } from "../../../redux/services/transactionsAPI";
import { useDispatch } from "react-redux";
import Modal from "../../Multipurpose-modal/Multipurpose-modal";
import items from "./expenses.json";
import sprite from "../../../Images/sprite.svg";
import s from "./TableBalance.module.css";

const TableBalance = ({ type, id }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

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
          <table className={`${s.tableMain} ${s.tableMainBody}`}>
            <tbody className={s.tableBody}>
              {items.map((el) => (
                <tr className={s.tableRow} key={el.id}>
                  <td className={s.thDate}>{el.date}</td>
                  <td className={s.tdDescr}>{el.descr}</td>
                  <td className={s.thCtg}>{el.category}</td>
                  <td
                    className={`${s.tdSum} ${
                      type !== "income" && s.tdSumExpense
                    }`}
                  >
                    {type === "income"
                      ? `${el.sum.toLocaleString("ru")}.00 грн.`
                      : `-${el.sum.toLocaleString("ru")}.00 грн.`}
                  </td>
                  <td className={s.thIcon}>
                    <button
                      className={s.deleteBtn}
                      type="button"
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
