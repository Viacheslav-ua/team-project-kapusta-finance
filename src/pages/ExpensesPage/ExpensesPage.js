import ExpensesIncome from "../../components/ExpensesIncome/ExpensesIncome";
import Header from '../../components/Header/Header';

import s from "../../components/Container/StylesBg.module.css";
import style from './ExpensesPage.module.css';
import { Link } from "react-router-dom";

export default function ExpensesPage () {
  return (
    <div className={s.mainBg}>
      <div className={s.bottomFon}>
        <Header />
        <Link to='/report' className={style.report}>Перейти к отчетам</Link>
        <ExpensesIncome />
        </div>
    </div>
  );
}