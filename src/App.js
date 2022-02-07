import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "../src/components/Header/Header";
import AuthForm from "./components/AuthForm/AuthForm";
import AuthPage from "./pages/AuthPage/AuthPage";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import IncomePage from './pages/IncomePage/IncomePage';
import Container from "./components/Container"
import AnimatedCabbage from "./components/AnimatedCabbage/AnimatedCabbage";


function App() {
  return (
    <div className="App">

//       <Routes>
//         <Route path="/" element={<AuthPage />} />
//         <Route path="/expenses" element={<ExpensesPage />} />
//         <Route path="/income" element={<IncomePage />} />
//       </Routes>
     
      <Container>
        <Header />
        <AuthPage />
        <AnimatedCabbage/>
      </Container>
    </div>
  );
}

export default App;
