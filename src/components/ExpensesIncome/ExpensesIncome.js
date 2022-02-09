import React from "react";
import s from './ExpensesIncome.module.css'
import { NavLink } from 'react-router-dom'
import items from './expenses.json'
import sprite from "../../Images/sprite.svg";

export default function ExpensesIncome() {
  
  return (<>
    <div className={s.buttons}>
      <NavLink to='/expenses' className={({ isActive }) => `${s.link}` + (isActive ? ` ${s.link__active}` : "")}>расход</NavLink>
      <NavLink to='/income' className={({ isActive }) => `${s.link}` + (isActive ? ` ${s.link__active}` : "")}>доход</NavLink>
    </div>
    
    <div className={s.container}>

      <table className={s.transactionHistory}>
      <thead className={s.tableHeader}>
        <tr>
          <th className={s.tableTitle}>дата</th>
          <th className={s.tableTitle}>описание</th>
          <th className={s.tableTitle}>категория</th>
          <th className={s.tableTitle}>сумма</th>
        </tr>
        </thead>
        </table>

      <div className={s.tableContainer}>
        <table className={s.tableBodyContainer}>
          <tbody>
        {items.map((el) => (
          <tr className={s.tableRow} key={el.id}>
            <td className={s.tableRowElement}>{el.date}</td>
            <td className={s.tableRowElement}>{el.descr}</td>
            <td className={s.tableRowElement}>{el.category}</td>
            <td className={s.tableRowElement}>
              {el.sum}
            </td>
            <td className={s.tableRowElement}>
              <button className={s.deleteBtn}>
                <svg className={s.icon}>
                  <use href={sprite + "#delete"} alt="delete transaction" />
                </svg>
              </button>
            </td>
          </tr>
        ))}
        </tbody>
        </table>
      </div>
         
    </div>

    </>)
}