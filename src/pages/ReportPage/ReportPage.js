import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";

import s from "../../components/Container/StylesBg.module.css";
import style from './ReportPage.module.css';

export default function ReportPage () {
  return (
    <div className={s.mainBg}>
      <div className={s.bottomFon}>
        <Header />
        <Link to='/expenses' className={style.report}>Вернуться на главную</Link>
      </div>
    </div>
  );
}