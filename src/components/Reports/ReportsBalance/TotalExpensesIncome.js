import { getSummary, getDate } from '../../../redux/report/report-selectors';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './TotalExpensesIncome.module.css';

function TotalExpensesIncome() {
    const summary = useSelector(getSummary)
    const date = useSelector(getDate)
    const [income, SetIncome] = useState(null)
    const [expences, SetExpences] = useState(null)

    console.log(date);
    const getProfit = () => {
        const { profit: { totalAmount } } = summary.find((el) => el.startDate === date ? date : '2022-01-01')
        SetIncome(totalAmount)
    }

     const getCosts = () => {
         const { costs: { totalAmount } } = summary.find((el) => el.startDate === date ? date : '2022-01-01')
        SetExpences(totalAmount)
     }

    useEffect(() => {
        getProfit()
        getCosts()
    }, [date])

    return (
        <div className={styles.componentBox}>
            <ul className={styles.balanceList}>
                <li className={styles.balanceItem}>
                    <p className={styles.balanceText}>
                        Расходы:
                    </p>
                    <span className={styles.expensesValue}>
                        {`- ${expences} грн.`}
                    </span>
                </li>
                <li className={styles.balanceItem}>
                    <p className={styles.balanceText}>
                        Доходы:
                    </p>
                    <span className={styles.incomeValue}>
                         {`+ ${income} грн.`}
                    </span>
                </li>
            </ul>
      </div>
  )  
}

export default TotalExpensesIncome;