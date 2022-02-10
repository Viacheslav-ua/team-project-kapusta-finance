import ExpensesIncome from "../../components/ExpensesIncome/ExpensesIncome";
import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/index';
import SummaryTable from '../../components/SummaryTable/index';
import { useState } from "react";

import s from "../../components/Container/StylesBg.module.css";
import style from './ExpensesPage.module.css';
import { Link } from "react-router-dom";

export default function ExpensesPage() {
  const [titleSummary, setTitleSummary] = useState('');
  const [dataSummary, setDataSummary] = useState('');
  return (
    <div className={s.mainBg}>
      <div className={s.bottomFon}>
        <Header />
        <Balance />
        {/* <Link to='/report' className={style.report}>Перейти к отчетам</Link> */}
        <ExpensesIncome />
        {/* <SummaryTable title={titleSummary} data={dataSummary}/> */}
        </div>
    </div>
  );
}