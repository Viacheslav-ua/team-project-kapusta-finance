import "./App.css";

import Header from "../src/components/Header/Header";
import AuthForm from "./components/AuthForm/AuthForm";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Header />
      <AuthPage />
    </div>
  );
}

export default App;
