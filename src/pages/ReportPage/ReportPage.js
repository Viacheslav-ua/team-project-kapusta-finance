import Header from '../../components/Header/Header';

import s from "../../components/Container/StylesBg.module.css";

export default function ReportPage () {
  return (
    <div className={s.mainBg}>
      <div className={s.bottomFon}>
        <Header />
      </div>
    </div>
  );
}