import ExpensesIncome from "../../components/ExpensesIncome/ExpensesIncome";

import s from "./ExpensesPage.module.css";

export default function ExpensesPage () {
  return (
    <div className={s.container}>
      <ExpensesIncome />
    </div>
  );
}