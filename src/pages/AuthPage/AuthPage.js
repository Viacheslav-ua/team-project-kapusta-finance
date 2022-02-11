import AuthPageTitle from "../../components/AuthPageTitle";
import AuthForm from "../../components/AuthForm";
import Container from "../../components/Container/index";

import style from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <>
      <Container>
        <div className={style.authContainer}>
          <AuthPageTitle />
          <AuthForm />
        </div>{" "}
      </Container>
    </>
  );
};

export default AuthPage;
