import style from "./MainPageTitle.module.css";

const MainPageTitle = () => (
  <div className={style.titleContainer}>
    <h1 className={style.mainTitle}>Kapusta</h1>
    <h2 className={style.title}>Smart Finance</h2>
  </div>
);

export default MainPageTitle;
