import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import { Link } from "react-router-dom";
import sprite from "../../Images/sprite.svg";

import style from './ReportPage.module.css';

const ReportPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Link to='/balance' className={style.report}>
          <svg className={style.icon}>
            <use href={sprite + "#arrow"} alt="Go back" />
          </svg>
          Вернуться на главную</Link>
      </Container>
    </>

        

  );
};

export default ReportPage;