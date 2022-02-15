import sprite from '../../../Images/sprite.svg'
import style from './SliderIncome.module.css'

export default function SliderIncomeList({data}) {
    return (
        <ul className={style.incomeList}>
            {data.map(({ _id: {categoryId,categoryName}, totalAmount }) => {
                return (
                    <li
                        key={categoryId}
                        className={style.incomeItem}>
                        <p className={style.amount}>{ totalAmount}</p>
                        <div className={style.iconWrapper}><svg className={style.icon}>
                        <use href={sprite + `#${categoryName}`} alt="My logo" />
                        </svg></div>
                        <p className={style.incomeType}>{categoryName}</p>
                    </li>
            )
        })}
            
        </ul>
    )
}