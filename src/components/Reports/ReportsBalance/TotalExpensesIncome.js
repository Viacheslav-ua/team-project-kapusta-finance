import { getSummary } from '../../../redux/report/report-selectors';
import { useSelector} from 'react-redux';
import styles from './TotalExpensesIncome.module.css';

function TotalExpensesIncome() {
    const summary = useSelector(getSummary)

    const { costs: { totalAmount } } = summary.find((el) => el.startDate === '2022-02-01');
    const { profit} = summary.find((el) => el.startDate === '2022-02-01');
    
    console.log(totalAmount);

    return (
        <div className={styles.componentBox}>
            <ul className={styles.balanceList}>
                <li className={styles.balanceItem}>
                    <p className={styles.balanceText}>
                        Расходы:
                    </p>
                    <span className={styles.expensesValue}>
                        {`- ${totalAmount} грн.`}
                    </span>
                </li>
                <li className={styles.balanceItem}>
                    <p className={styles.balanceText}>
                        Доходы:
                    </p>
                    <span className={styles.incomeValue}>
                         {`+ ${profit.totalAmount} грн.`}
                    </span>
                </li>
            </ul>
      </div>
  )  
}

export default TotalExpensesIncome;