import { useState } from 'react';
import { transactionsApi } from '../../../redux/services/transactionsAPI';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Multipurpose-modal/Multipurpose-modal';
// import { getBalance } from "../../../redux/finance/finance-selectors";
import items from "./expenses.json";
import sprite from "../../../Images/sprite.svg";
import s from './TableBalance.module.css';

const TableBalance = ({type, id}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  // const getDataBalance = useSelector(getBalance);

  // console.log("categoryName", getDataBalance);
  
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
              <th className={`${s.tableTitle } ${s.thDate}`}>дата</th>
              <th className={`${s.tableTitle } ${s.thDescr}`}>описание</th>
              <th className={`${s.tableTitle } ${s.thCtg}`}>категория</th>
              <th className={`${s.tableTitle } ${s.thSum}`}>сумма</th>
              <th className={`${s.tableTitle } ${s.thIcon}`}></th>
            </tr>
          </thead>
        </table>

        <div className={s.tableBodyScroll}>
          <table className={`${s.tableMain} ${s.tableMainBody}`}>
            <tbody className={s.tableBody}>
              {/* {getDataBalance.map((el) => (
                <tr className={s.tableRow} key={el._id}>
                  <td className={s.thDate}>{el.dateTransaction}</td>
                  <td className={s.tdDescr}>{el.description}</td>
                  <td className={s.thCtg}>{el.categoryName}</td>
                  <td className={`${s.tdSum} ${el.isProfit !== true && s.tdSumExpense}`}>
                    {el.isProfit === true
                      ? `${el.amount.toLocaleString('ru')}.00 грн.`
                      : `-${el.amount.toLocaleString('ru')}.00 грн.`}
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
              ))} */}
              {items.map((el) => (
                <tr className={s.tableRow} key={el.id}>
                  <td className={s.thDate}>{el.date}</td>
                  <td className={s.tdDescr}>{el.descr}</td>
                  <td className={s.thCtg}>{el.category}</td>
                  <td className={`${s.tdSum} ${type !== 'income' && s.tdSumExpense}`}>
                    {type === 'income'
                      ? `${el.sum.toLocaleString('ru')}.00 грн.`
                      : `-${el.sum.toLocaleString('ru')}.00 грн.`}
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

          {showModal === true && (
            <Modal
              questionText = 'Вы уверены?'
              onClickApproved={() => dispatch(transactionsApi.deleteTransaction(id))}
              onClose={onCloseModal}
            />
          )}

      </div>
        </div>
    </>
  );
  
};

export default TableBalance;