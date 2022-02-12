import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import { routes, PrivateRoute, PublicRoute } from "./routes";

import Header from "../src/components/Header/Header";
import AuthForm from "./components/AuthForm/AuthForm";
import Container from "./components/Container";
import AnimatedCabbage from "./components/AnimatedCabbage/AnimatedCabbage";
import { CurrentPeriod } from "./components/CurrentPeriod/CurrentPeriod";

// import ModalBalance from "./components/ModalBalance";

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const BalancePage = lazy(() => import("./pages/BalancePage/BalancePage"));
const ReportPage = lazy(() => import("./pages/ReportPage/ReportPage"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="loading...">
        <Routes>
          <Route
            exact
            path={routes.auth}
            element={<PublicRoute restricted component={AuthPage} />}
          />
          <Route
            path={routes.google}
            element={<PublicRoute restricted component={AuthPage} />}
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
    </div>
  );
}

export default App;
