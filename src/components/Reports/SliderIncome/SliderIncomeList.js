import sprite from '../../../Images/sprite.svg'
import { incomeOptions } from '../../../helpers/incomeOptions'
import {data} from './data'
import style from './SliderIncome.module.css'

export default function SliderIncomeList() {
    return (
        <ul className={style.incomeList}>
            {data.map(({ _id, categoryName, amount }) => {
                return (
                    <li
                        key={_id}
                        className={style.incomeItem}>
                        <p className={style.amount}>{ amount}</p>
                        <div className={style.iconWrapper}><svg className={style.icon}>
                        <use href={sprite + `#${categoryName}`} alt="My logo" />
                        </svg></div>
                        <p className={style.incomeType}>{incomeOptions[categoryName]}</p>
                    </li>
            )
        })}
            
        </ul>
    )
}