import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import MultipleSlider from "../../components/MultipleSlider/MultipleSlider";
import sprite from "../../Images/sprite.svg";

import style from "./ReportPage.module.css";

const ReportPage = () => {
  return (
    <div>
      <div>
        <Header />
        <Link to="/balance" className={style.report}>
          Вернуться на главную
        </Link>
        <MultipleSlider />
      </div>
    </div>
  );
};

export default ReportPage;
