import styles from './TotalExpensesIncome.module.css';

function TotalExpensesIncome() {
    const expenses = '18 000.00';
    const income='45 000.00'

    return (
        <div className={styles.componentBox}>
            <ul className={styles.balanceList}>
                <li className={styles.balanceItem}>
                    <p className={styles.balanceText}>
                        Расходы:
                    </p>
                    <span className={styles.expensesValue}>
                        {`- ${expenses} грн.`}
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