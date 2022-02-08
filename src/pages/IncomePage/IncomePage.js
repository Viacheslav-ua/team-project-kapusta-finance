import ExpensesIncome from "../../components/ExpensesIncome/ExpensesIncome";
import Header from '../../components/Header/Header';

import s from "../../components/Container/StylesBg.module.css";

export default function IncomePage () {
  return (
    <div className={s.mainBg}>
      <div className={s.bottomFon}>
      <Header />
        <ExpensesIncome />
        </div>
    </div>
  );
}