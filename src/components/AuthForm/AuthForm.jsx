import React from "react";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import sprite from "../../Images/sprite.svg";
import style from "./AuthForm.module.css";
import { useLoginByGoogleQuery, useLoginUserMutation, useRegistrationUserMutation } from "../../redux/services/authAPI"

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required("Это обязательное поле"),
  password: Yup.string()
    .required("Это обязательное поле")
    .min(6, "Пароль должен состоять как минимум из 6 символов"),
});

const initialValues = {
  email: "",
  password: "",
};




const AuthForm = () => {
  const [loginUser, { isLoading : isLoadingLogin, isError : isErrorLogin }] = useLoginUserMutation()
  const [registrationUser, { isLoading: isLoadingRegistration, isError: isErrorRegistration }] = useRegistrationUserMutation()
  const dispatch = useDispatch()

  const handleSubmit = useCallback(async ({ email, password }, e) => {
    if (email.trim() === "" || password.trim() === "") {
      return;
    }
    const dataUser = {
      email: email,
      password: password,
    }
    
    switch (e.target.name) {
      case 'login':
        try {
          const response = await loginUser(dataUser)
          console.log(response);
        } catch (error) {
          console.log(error);
        }
        break
      case 'registration':
        try {
          const response = await registrationUser(dataUser)
          console.log(response);
        } catch (error) {
          console.log(error);
        }
        break
      default:
        return
    }
  }, [loginUser, registrationUser])

  return (
    <Formik initialValues={initialValues} validationSchema={FormSchema}>
      {(formik) => {
        const { validateForm, values, handleChange, isValid } = formik;

        return (
          <div className={style.container}>
            <h4 className={style.auth}>
              Вы можете авторизоваться с помощью <br /> Google Account:
            </h4>

            <a href={"/"} className={style.googleAuthButton}>
              <svg className={style.googleIcon}>
                <use href={sprite + "#google"} alt="Google" width="18" />
              </svg>
              <span className={style.googleText}>Google</span>
            </a>

            <h4 className={`${style.auth} ${style.authTittle}`}>
              Или зайти с помощью e-mail и пароля, <br />
              предварительно зарегистрировавшись:
            </h4>

            <Form>
              <div className={style.formRow}>
                <label className={style.formRowTitle}>
                  <span className={style.asterisk}>{!isValid && "*"}</span>
                  Электронная почта:
                </label>

                <Field
                  value={values.email}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  onChange={handleChange}
                  className={style.email}
                />

                <ErrorMessage
                  name="email"
                  component="span"
                  className={style.error}
                />
              </div>

              <div className={style.formRow}>
                <label className={style.formRowTitle}>
                  <span className={style.asterisk}>{!isValid && "*"}</span>
                  Пароль:
                </label>

                <Field
                  value={values.password}
                  type="password"
                  name="password"
                  id="password"
                  className={style.password}
                  placeholder="Пароль"
                />

                <ErrorMessage
                  name="password"
                  component="span"
                  className={style.error}
                />
              </div>

              <div className={style.authButtons}>
                <button
                  type="button"
                  name="login"
                  className={style.btn}
                  onClick={(e) =>
                    validateForm().then(() => {
                      handleSubmit(values, e)
                    })
                  }>
                  ВOЙТИ
                </button>

                <button
                  type="button"
                  name="registration"
                  className={style.btn}
                  onClick={(e) =>
                    validateForm().then(() => {
                      handleSubmit(values, e)
                    })
                  }
                >
                  РЕГИСТРАЦИЯ
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default AuthForm;
