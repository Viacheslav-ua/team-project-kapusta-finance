import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import { routes, PrivateRoute, PublicRoute } from "./routes";

import Header from "../src/components/Header/Header";
import AuthForm from "./components/AuthForm/AuthForm";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import IncomePage from "./pages/IncomePage/IncomePage";
import ReportPage from './pages/ReportPage/ReportPage';
import Container from "./components/Container";
import AnimatedCabbage from "./components/AnimatedCabbage/AnimatedCabbage";

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

function App() {
  return (
    <div className="App">
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
            path={routes.expenses}
            element={<PublicRoute component={ExpensesPage} />}
            // element={<PrivateRoute component={ExpensesPage} />}
          />
          <Route
            path={routes.income}
            element={<PublicRoute component={IncomePage} />}
            // element={<PrivateRoute component={IncomePage} />}
          />
          <Route
            path={routes.report}
            element={<PublicRoute component={ReportPage} />}
            // element={<PrivateRoute component={AuthPage} />}
          />
          <Route path="*" element={<PublicRoute component={PageNotFound} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
