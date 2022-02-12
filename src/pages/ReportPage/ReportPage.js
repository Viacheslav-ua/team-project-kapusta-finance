import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import ReportsBalance from "../../components/Reports/ReportsBalance";
import MultipleSlider from "../../components/Reports/MultipleSlider/MultipleSlider";
import CurrentPeriod from "../../components/Reports/CurrentPeriod/CurrentPeriod";

import style from "./ReportPage.module.css";

const ReportPage = () => {
  return (
        <Container>
        <div className={style.topWrapper}>
          <Link to="/balance" className={style.report}>
            Вернуться на главную
          </Link>
          <CurrentPeriod />
        </div>
        <ReportsBalance />
        <MultipleSlider />
      </Container>
  );
};

export default ReportPage;
