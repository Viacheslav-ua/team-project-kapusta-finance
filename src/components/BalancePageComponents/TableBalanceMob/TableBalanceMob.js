import { useState, useCallback } from 'react';
import { useDeleteTransactionMutation, useFetchAllTransactionsQuery } from '../../../redux/services/transactionsAPI';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../../redux/finance/finance-actions';
import Modal from '../../Multipurpose-modal/Multipurpose-modal';
import items from "./expenses.json";
import sprite from "../../../Images/sprite.svg";
import s from './TableBalanceMob.module.css';

const TableBalanceMob = ({type, id}) => {
  const dispatch = useDispatch();
  const [removeTransaction] = useDeleteTransactionMutation();
  const [showModal, setShowModal] = useState(false);
  
   const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const deleteTransaction = useCallback(async (id) => {
    try {
      // const response = await removeTransaction(id);
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  }, [])

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

              </li>
            </div>
          ))}
        </ul>
         {showModal === true && (
            <Modal
              questionText = 'Вы уверены?'
              onClickApproved={deleteTransaction(id)}
              onClose={onCloseModal}
            />
          )}
      </div>
    </>
  );
  
};

export default TableBalanceMob;