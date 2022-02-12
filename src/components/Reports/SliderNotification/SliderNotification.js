import style from './SliderNotification.module.css'

export default function SliderNotification({operation}) {
    return (
        <div className={style.wrapper}>
            <p className={style.text}>
                У вас пока нет {operation} 
            </p>
        </div>
    )
}