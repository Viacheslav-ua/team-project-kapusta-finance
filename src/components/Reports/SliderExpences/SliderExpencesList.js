import sprite from '../../../Images/sprite.svg'
import style from './SliderExpences.module.css'


export default function SliderExpencesList ({data})  {
    return (
        <ul className={style.expencesList}>
            {data.map(({ _id: {categoryId,categoryName}, totalAmount }) => {
                return (
                <li
                    key={categoryId}
                    className={style.expencesItem}>
                    <p className={style.amount}>{ totalAmount}</p>
                <div className={style.iconWrapper}><svg className={style.icon}>
          <use href={sprite + `#${categoryName}`} alt="My logo" />
                </svg></div>
                <p className={style.expencesType}>{ categoryName}</p>
                    </li> 
                )
            })}
        </ul>
    )
}