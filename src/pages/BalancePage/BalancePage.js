import { useState } from 'react';

import Header from '../../components/Header/Header';
import Balance from '../../components/Balance/index';
import Container from '../../components/Container/Container';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import s from './BalancePage.module.css'


const BalancePage = () => {
  const[type, setType] = useState('expense');
  
  const viewPort = useWindowDimensions();
  const btnTypeToggle = e => {
    setType(`${e.target.title}`);
  }

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
                    type === 'expense' && s.buttonExpenseActive
                  }`}
                onClick={btnTypeToggle}
                title="expense"
              >расход</button>
              <button
                className={`${s.buttonExpense} ${
                    type === 'income' && s.buttonExpenseActive
                  }`}
                onClick={btnTypeToggle}
                title="income"
              >доход</button>
            </div>
            {/* <ExpensesIncome /> */}
            {/* <SummaryTable title={titleSummary} data={dataSummary}/> */}
          </>
        )}
        {viewPort.width < 768 && (
          <>
            <Balance />
            <div className={s.buttonsMob}>
              <button
                className={`${s.buttonExpenseMob} ${
                    type === 'expense' && s.buttonExpenseActive
                  }`}
                onClick={btnTypeToggle}
                title="expense"
              >расход</button>
              <button
                className={`${s.buttonExpenseMob} ${
                    type === 'income' && s.buttonExpenseActive
                  }`}
                onClick={btnTypeToggle}
                title="income"
              >доход</button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};
export default BalancePage;