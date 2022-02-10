// // import React from "react";
// // import { useDispatch } from "react-redux";
// // import { Formik, Form, Field, ErrorMessage } from "formik";
// // import * as Yup from "yup";
// // import { useState } from "react";

// // import { register, login } from "../../redux/auth/auth-operations";

// // import sprite from "../../Images/sprite.svg";

// // import style from "./AuthForm.module.css";

// // const FormSchema = Yup.object().shape({
// //   email: Yup.string().email().required("Это обязательное поле"),
// //   password: Yup.string()
// //     .required("Это обязательное поле")
// //     .min(6, "Пароль должен состоять как минимум из 6 символов"),
// // });

// // const initialValues = {
// //   email: "",
// //   password: "",
// // };

// // const AuthForm = () => {
// //   // const butRegClick = ({ email, password }) => {
// //   //   if (email.trim() === "" || password.trim() === "") {
// //   //     return;
// //   //   }
// //   // };
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const dispatch = useDispatch();

// //   const inputHandler = ({ target: { name, value } }) => {
// //     switch (name) {
// //       case "email":
// //         return setEmail(value);
// //       case "password":
// //         return setPassword(value);
// //       default:
// //         return;
// //     }
// //   };
// //   const handlerSubmit = (e) => {
// //     e.preventDefault();
// //     const user = { email, password };
// //     dispatch(login(user));
// //     setEmail("");
// //     setPassword("");
// //   };

// //   const handlerRegisterSubmit = (e) => {
// //     e.preventDefault();
// //     const user = { email, password };
// //     dispatch(register(user));
// //     // setEmail('');
// //     // setPassword('');
// //   };

// //   return (
// //     <Formik initialValues={initialValues} validationSchema={FormSchema}>
// //       {(formik) => {
// //         const { validateForm, values, handleChange, isValid } = formik;

// //         return (
// //           <div className={style.container}>
// //             <h4 className={style.auth}>
// //               Вы можете авторизоваться с помощью <br /> Google Account:
// //             </h4>

// //             <a href={"/"} className={style.googleAuthButton}>
// //               <svg className={style.googleIcon} width="18" height="18">
// //                 <use href={`${sprite}#google`}></use>
// //               </svg>

// //               <span className={style.googleText}>Google</span>
// //             </a>

// //             <h4 className={`${style.auth} ${style.authTittle}`}>
// //               Или зайти с помощью e-mail и пароля, <br />
// //               предварительно зарегистрировавшись:
// //             </h4>

// //             <Form>
// //               <div className={style.formRow}>
// //                 <label className={style.formRowTitle}>
// //                   <span className={style.asterisk}>{!isValid && "*"}</span>
// //                   Электронная почта:
// //                 </label>

// //                 <Field
// //                   value={values.email}
// //                   type="text"
// //                   name="email"
// //                   id="email"
// //                   placeholder="your@email.com"
// //                   onChange={handleChange}
// //                   className={style.email}
// //                 />

// //                 <ErrorMessage
// //                   name="email"
// //                   component="span"
// //                   className={style.error}
// //                 />
// //               </div>

// //               <div className={style.formRow}>
// //                 <label className={style.formRowTitle}>
// //                   <span className={style.asterisk}>{!isValid && "*"}</span>
// //                   Пароль:
// //                 </label>

// //                 <Field
// //                   value={values.password}
// //                   type="password"
// //                   name="password"
// //                   id="password"
// //                   className={style.password}
// //                   placeholder="Пароль"
// //                 />

// //                 <ErrorMessage
// //                   name="password"
// //                   component="span"
// //                   className={style.error}
// //                 />
// //               </div>

// //               <div className={style.authButtons}>
// //                 <button type="submit" className={style.btn}>
// //                   ВOЙТИ
// //                 </button>

// //                 <button
// //                   type="button"
// //                   className={style.btn}
// //                   // onClick={() =>
// //                   //   validateForm().then(() => {
// //                   //     butRegClick(values);
// //                   //   })
// //                   // }
// //                   onClick={handlerRegisterSubmit}
// //                 >
// //                   РЕГИСТРАЦИЯ
// //                 </button>
// //               </div>
// //             </Form>
// //           </div>
// //         );
// //       }}
// //     </Formik>
// //   );
// // };

// // export default AuthForm;

// import { useState } from "react";
// import { useFormik } from "formik";
// // import styles from "./SignUpForm.module.scss";
// // import googleIcon from "./google.svg";
// // import { registerThunk, loginThunk } from "../../../redux/asyncthunc";
// import { useDispatch } from "react-redux";
// import { register, login } from "../../redux/auth/auth-operations";

// const SignupForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const inputHandler = ({ target: { name, value } }) => {
//     switch (name) {
//       case "email":
//         return setEmail(value);
//       case "password":
//         return setPassword(value);
//       default:
//         return;
//     }
//   };
//   const handlerSubmit = (e) => {
//     e.preventDefault();
//     const user = { email, password };
//     dispatch(login(user));
//     setEmail("");
//     setPassword("");
//   };

//   const handlerRegisterSubmit = (e) => {
//     e.preventDefault();
//     const user = { email, password };
//     dispatch(register(user));
//     // setEmail('');
//     // setPassword('');
//   };
//   return (
//     <div>
//       <div>
//         <p>
//           Вы можете авторизоваться с помощью <br />
//           Google Account:
//         </p>
//       </div>
//       <p>
//         Или зайти с помощью e-mail и пароля,
//         <br /> предварительно зарегистрировавшись:
//       </p>
//       <div>
//         <form onSubmit={handlerSubmit}>
//           <label htmlFor="email">Электронный адрес:</label>
//           <ul>
//             <li>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 onChange={inputHandler}
//                 value={email}
//                 placeholder="example@mail.com"
//               />
//             </li>
//             <label htmlFor="password">Пароль:</label>
//             <li>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 onChange={inputHandler}
//                 value={password}
//                 placeholder="************"
//               />
//             </li>
//             <li>
//               <button type="submit">
//                 <span>Войти</span>
//               </button>
//               <button onClick={handlerRegisterSubmit} type="button">
//                 <span>Регистрация</span>
//               </button>
//             </li>
//           </ul>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default SignupForm;

import React from "react";
import Button from "../Button/Button";
import styles from "./AuthForm.module.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register, login } from "../../redux/auth/auth-operations";

const BasicFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("это обязательное поле"),
  password: Yup.string()
    .min(8, "Must be longer than 8 characters")
    .required("это обязательное поле"),
});

const AuthForm = () => {
  const dispatch = useDispatch();

  const handleRegister = async (validateForm, values) => {
    console.log(values);
    const error = await validateForm();
    if (Object.keys(error).length === 0) {
      dispatch(login(values));
    }
  };

  return (
    <>
      <div className={styles.form}>
        <div autoComplete="on">
          <p className={styles.textGoogle}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <div>
            <a
              className={styles.FormContent_button}
              href="https://localhost3001:/api/google"
            >
              Google
            </a>
          </div>
          <p className={styles.text}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={BasicFormSchema}
          onSubmit={async (value) => {
            dispatch(register(value));
          }}
          render={({ errors, touched, validateForm, values }) => (
            <Form className="form-container">
              <label className={styles.label} htmlFor="email">
                Электронная почта:
                <Field
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                  className={styles.input}
                />
              </label>
              {errors.email && touched.email && (
                <div className={styles.span_star}>{errors.email}</div>
              )}

              <label className={styles.label} htmlFor="password">
                Пароль:
                <Field
                  name="password"
                  placeholder="Пароль"
                  type="password"
                  className={styles.input}
                />
              </label>
              {errors.password && touched.password && (
                <div className={styles.span_star}>{errors.password}</div>
              )}

              <div className={styles.button__container}>
                <Button
                  text={"войти"}
                  type="button"
                  onClick={() => handleRegister(validateForm, values)}
                />
                <Button text={"регистрация"} />
              </div>
            </Form>
          )}
        />
      </div>
    </>
  );
};

export default AuthForm;
