import { useState } from "react";

import Header from "../../components/Header/Header";
import Balance from "../../components/BalancePageComponents/Balance/Balance";
import Container from "../../components/Container/index";
import TransactionForm from "../../components/BalancePageComponents/TransactionForm/index";
import TableBalance from "../../components/BalancePageComponents/TableBalance/TableBalance";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import s from "./BalancePage.module.css";
import sprite from "../../Images/sprite.svg";

const BalancePage = () => {
  const [type, setType] = useState("expense");
  const [listRender, setListRender] = useState(true);

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
      <Header />
      <Container>
        {viewPort.width >= 768 && (
          <>
            <Balance />
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
            <div className={s.transactionTableSummaryContainer}>
              <TransactionForm />
              <TableBalance type={type} />
              {/* <ExpensesIncome /> */}
              {/* <SummaryTable title={titleSummary} data={dataSummary}/> */}
            </div>
          </>
        )}
        {viewPort.width < 768 && (
          <>
            {listRender ? (
              <>
                <Balance />
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
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};
export default BalancePage;
