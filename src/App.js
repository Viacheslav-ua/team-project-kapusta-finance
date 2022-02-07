import "./App.css";

import AuthForm from "./components/AuthForm/AuthForm";
import AuthPage from "./pages/AuthPage/AuthPage";
import Container from "./components/Container"
import AnimatedCabbage from "./components/AnimatedCabbage/AnimatedCabbage";


function App() {
  return (
    <div className="App">
      <Container>
        <AuthPage />
        <AnimatedCabbage/>
      </Container>
      
    </div>
  );
}

export default App;
