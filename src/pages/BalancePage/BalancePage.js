import { useState } from "react";
import DatePicker from "react-datepicker";

import Balance from "../../components/BalancePageComponents/Balance/Balance";
import GoToReports from "../../components/BalancePageComponents/GoToReport";
import Container from "../../components/Container/index";
import TransactionForm from "../../components/BalancePageComponents/TransactionForm/index";
import TableBalance from "../../components/BalancePageComponents/TableBalance/TableBalance";
import TableBalanceMob from "../../components/BalancePageComponents/TableBalanceMob/TableBalanceMob";
import SummaryTable from "../../components/BalancePageComponents/SummaryTable/index";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import s from "./BalancePage.module.css";
import sprite from "../../Images/sprite.svg";


const BalancePage = () => {
  const [type, setType] = useState("expense");
  const [listRender, setListRender] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const viewPort = useWindowDimensions();

  const btnTypeToggle = (e) => {
    setType(`${e.target.title}`);
  };

  const onBtnBack = (e) => {
    btnTypeToggle(e);
    return listRender ? setListRender(false) : setListRender(true);
  };

  return (
    <>
      <Container>
        {viewPort.width >= 768 && (
          <>
            <div className={s.balanceWrapper}>
              <GoToReports />
              <Balance />
            </div>
            <div className={s.buttons}>
              <button
                className={`${s.buttonExpense} ${
                  type === "expense" && s.buttonExpenseActive
                }`}
                onClick={btnTypeToggle}
                title="expense"
              >
                расход
              </button>
              <button
                className={`${s.buttonExpense} ${
                  type === "income" && s.buttonExpenseActive
                }`}
                onClick={btnTypeToggle}
                title="income"
              >
                доход
              </button>
            </div>
            {viewPort.width >= 768 && viewPort.width < 1280 && (
              <>
                <div className={s.transactionTableSummaryContainer}>
                  <TransactionForm />
                  <TableBalance type={type} />
                </div>
                <SummaryTable />
              </>
            )}
            {viewPort.width >= 1280 && (
              <div className={s.transactionTableSummaryContainer}>
              <TransactionForm />
              <div className={s.tableSummaryContainer}>
                <TableBalance type={type} />
                <SummaryTable />
              </div>
            </div>
            )}
            
          </>
        )}
        {viewPort.width < 768 && (
          <>
            {listRender ? (
              <>
              <div className={s.balanceWrapper}>
                <GoToReports />
                <Balance />
                </div>
                <div className={s.calendarWrapper}>
                  <svg className={s.calendar}>
                      <use href={`${sprite}#calendar`}></use>
                  </svg>
                  <DatePicker
                    type="date"
                    locale="ru"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd.MM.yyyy"
                    // maxDate={new Date()}
                    className={s.inputeDate}
                  />
                </div>
                <TableBalanceMob type={type} />
                <div className={s.buttonsMob}>
                  <button
                    className={`${s.buttonExpenseMob} ${
                      type === "expense" && s.buttonExpenseActive
                    }`}
                    onClick={onBtnBack}
                    title="expense"
                  >
                    расход
                  </button>
                  <button
                    className={`${s.buttonExpenseMob} ${
                      type === "income" && s.buttonExpenseActive
                    }`}
                    onClick={onBtnBack}
                    title="income"
                  >
                    доход
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className={s.buttonGoBack} onClick={onBtnBack}>
                  <svg className={s.icon}>
                    <use href={sprite + "#arrow"} alt="Go back" />
                  </svg>
                </button>
                  <TransactionForm />
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};
export default BalancePage;
