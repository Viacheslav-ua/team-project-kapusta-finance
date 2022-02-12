
import Header from "../../components/Header/Header";
import Container from "../../components/Container/ContainerReport";
import { NavLink } from "react-router-dom";
import ReportsBalance from "../../components/Reports/ReportsBalance";
import MultipleSlider from "../../components/Reports/MultipleSlider/MultipleSlider";
import CurrentPeriod from "../../components/Reports/CurrentPeriod/CurrentPeriod";
import useWindowDimensions from '../../hooks/useWindowDimensions';

import style from "./ReportPage.module.css";
import sprite from "../../Images/sprite.svg";

const ReportPage = () => {
  const viewPort = useWindowDimensions();
  return (
      <Container>

        <div className={style.topWrapper}>
          <NavLink to="/balance" className={style.report}>
            <svg className={style.icon}>
              <use href={sprite + "#arrow"} alt="Go back" />
            </svg>
            <p className={style.linkText}>{viewPort.width > 767 && 'Вернуться на главную'}</p>
          </NavLink>
          <CurrentPeriod />
        </div>
      <ReportsBalance />
      <div className={style.bottomWrapper}>
        <MultipleSlider />

      </div>
      </Container>
  );
};

export default ReportPage;
