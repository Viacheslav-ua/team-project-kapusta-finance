import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { routes, PrivateRoute, PublicRoute } from "./routes";

import { getAccessToken } from "./redux/auth/auth-selectors"
import { useRefreshTokenMutation } from "./redux/services/authAPI"
import * as actions from "./redux/auth/auth-actions"
import { Oval } from 'react-loader-spinner'

import Header from "../src/components/Header/Header";
// import AuthForm from "./components/AuthForm/AuthForm";
// import Container from "./components/Container";
// import AnimatedCabbage from "./components/AnimatedCabbage/AnimatedCabbage";
// import { CurrentPeriod } from "./components/CurrentPeriod/CurrentPeriod";
// import Balance from "./components/Balance/Balance";
// import ModalBalance from "./components/ModalBalance";

// import ModalBalance from "./components/ModalBalance";

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const GoogleRedirect = lazy(() => import("./pages/GoogleRedirect/GoogleRedirect"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const BalancePage = lazy(() => import("./pages/BalancePage/BalancePage"));
const ReportPage = lazy(() => import("./pages/ReportPage/ReportPage"));

function App() {

  const accessToken = useSelector(getAccessToken)
  const dispatch = useDispatch()
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [getCurrentUser] = useRefreshTokenMutation()

  const sendDataInStore = useCallback(
    (response) => {
      dispatch(
        actions.user({
          ...response.data.user,
          name: response.data.user.email.match(/.+?(?=@)/)[0],
        })
      );
      dispatch(actions.accessToken(response.data.accessToken));
      dispatch(actions.isLoggedIn(true));
    },
    [dispatch]
  );

  const refreshCurrentUser = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const response = await getCurrentUser();
      if (response.data) {
        sendDataInStore(response);
      }
      setIsRefreshing(false);
    } catch (error) {
      setIsRefreshing(false);
      console.log(error);
    }
  }, [getCurrentUser, sendDataInStore]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    refreshCurrentUser();
  }, []);

  return (
    <>
      {!isRefreshing && <div className="App">
        <Header />
        <Suspense
          fallback={<div className="App-loader"><Oval
                      ariaLabel="loading-indicator"
                      height={50}
                      width={50}
                      strokeWidth={3}
                      color="rgba(255, 117, 29, 1)"
                      secondaryColor="rgba(170, 178, 197, 0.7)"
                    /></div>}>
          <Routes>
            <Route
              exact
              path={routes.auth}
              element={<PublicRoute restricted component={AuthPage} />}
            />
            <Route
              path={routes.google}
              element={<PublicRoute restricted component={GoogleRedirect} />}
            />
            <Route
              path={routes.balance}
              // element={<PublicRoute component={BalancePage} />}
              element={<PrivateRoute component={BalancePage} />}
            />
            <Route
              path={routes.report}
              // element={<PublicRoute component={ReportPage} />}
              element={<PrivateRoute component={ReportPage} />}
            />
            <Route path="*" element={<PublicRoute component={PageNotFound} />} />
          </Routes>
        </Suspense>
      </div>}

    </>
  );
}

export default App;
