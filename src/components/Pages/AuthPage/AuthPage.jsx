import MainPageTitle from "../../MainPageTitle";
// import AuthForm from "components/AuthForm";

import style from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={style.authContainer}>
      <MainPageTitle />
      {/* <AuthForm /> */}
    </div>
  );
};

export default AuthPage;
