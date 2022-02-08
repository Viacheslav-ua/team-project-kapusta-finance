import ExpensesIncome from "../../components/ExpensesIncome/ExpensesIncome";

import s from "./IncomePage.module.css";

export default function IncomePage () {
  return (
    <div className={s.container}>
      <ExpensesIncome />
    </div>
  );
}