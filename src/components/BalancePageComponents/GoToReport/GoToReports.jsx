import sprite from '../../../Images/sprite.svg';
import s from './GoToReports.module.css';
import { Link } from 'react-router-dom';

export default function GoToReports() {
    return (
        <Link
            className={s.button}
            to='/report'
        >
            <span className={s.text}>Перейти к отчетам</span>
                <svg width="20" height="20" className={s.icon}>
                    <use href={`${sprite}#diagram`}></use>
                </svg>
        </Link>
    );
}