import { Route, Routes } from "react-router-dom";
import "./App.css";

import AuthForm from "./components/AuthForm/AuthForm";
import AuthPage from "./pages/AuthPage/AuthPage";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import IncomePage from './pages/IncomePage/IncomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/income" element={<IncomePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
