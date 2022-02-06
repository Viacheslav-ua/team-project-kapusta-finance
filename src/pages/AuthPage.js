import AuthPageTitle from "../components/AuthPageTitle";
import AuthForm from "../components/AuthForm";
// import Container from "../components/Container/Container";

import style from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={style.authContainer}>
      <AuthPageTitle />
      <AuthForm />
    </div>
  );
};

export default AuthPage;
