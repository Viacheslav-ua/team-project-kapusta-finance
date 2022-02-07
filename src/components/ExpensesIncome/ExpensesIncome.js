import React from "react";
import s from './ExpensesIncome.module.css'
import { NavLink } from 'react-router-dom'
import items from './expenses.json'

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

      <tbody className={s.tableBody}>
        {items.map((el) => (
          <tr className={s.tableRow} key={el.id}>
            <td>{el.date}</td>
            <td>{el.descr}</td>
            <td>{el.category}</td>
            <td>{el.sum}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    </>)
}