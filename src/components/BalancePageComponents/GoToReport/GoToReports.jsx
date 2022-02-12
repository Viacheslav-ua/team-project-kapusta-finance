import sprite from '../../../Images/sprite.svg';
import s from './GoToReports.module.css';

export default function GoToReports() {
    return (
        <a
            className={s.button}
            type="button"
            href='/report'
        >
            <span className={s.text}>Перейти к отчетам</span>
                <svg width="20" height="20" className={s.icon}>
                    <use href={`${sprite}#diagram`}></use>
                </svg>
        </a>
    );
}