import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect, lazy, Suspense } from "react";
import AuthPageTitle from "./components/AuthPageTitle";
import Container from "./components/Container/Container";
import AuthPage from "./pages/AuthPage";
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
  return (
    <div className="App">
      {/* <Container>
        <Suspense>
          <Routes>
            <Route path={routes.auth} element={<AuthPage />} />
          </Routes>
        </Suspense>
      </Container> */}

      <AuthForm />
    </div>
  );
}

export default App;
