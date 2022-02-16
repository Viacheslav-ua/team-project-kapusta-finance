import { getSummary, getDate } from '../../../redux/report/report-selectors';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './TotalExpensesIncome.module.css';

function TotalExpensesIncome() {
    const summary = useSelector(getSummary)
    const date = useSelector(getDate)
    const [profit, SetProfit] = useState(null)
    const [costs, SetCosts] = useState(null)
    console.log(date);

    const getProfit = () => {
        const { profit: { totalAmount } } = summary.find((el) => el.startDate === date )
        SetProfit(totalAmount)
    }

     const getCosts = () => {
         const { profit: { totalAmount } } = summary.find((el) => el.startDate === date )
        SetCosts(totalAmount)
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
                        {`- ${costs} грн.`}
                    </span>
                </li>
                <li className={styles.balanceItem}>
                    <p className={styles.balanceText}>
                        Доходы:
                    </p>
                    <span className={styles.incomeValue}>
                         {`+ ${profit} грн.`}
                    </span>
                </li>
            </ul>
      </div>
  )  
}

export default TotalExpensesIncome;