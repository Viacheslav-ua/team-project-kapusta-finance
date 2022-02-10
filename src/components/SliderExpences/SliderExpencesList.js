import { expenseOptions } from '../../helpers/expencesOptions'
import {data} from './data'
import sprite from '../../Images/sprite.svg'
import style from './SliderExpences.module.css'


export default function SliderExpencesList ()  {
    return (
        <ul className={style.expencesList}>
            {data.map(({ _id, categoryName, amount }) => {
                return (
                <li
                    key={_id}
                    className={style.expencesItem}>
                    <p className={style.amount}>{ amount}</p>
                <div className={style.iconWrapper}><svg className={style.icon}>
          <use href={sprite + `#${categoryName}`} alt="My logo" />
                </svg></div>
                <p className={style.expencesType}>{ expenseOptions[categoryName]}</p>
                    </li> 
                )
            })}
        </ul>
    )
}