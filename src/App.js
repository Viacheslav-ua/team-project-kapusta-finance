import "./App.css";

import AuthForm from "./components/AuthForm/AuthForm";
import AuthPage from "./pages/AuthPage/AuthPage";
import Container from "./components/Container"


function App() {
  return (
    <div className="App">
      <Container>
        <AuthPage />
      </Container>
      
    </div>
  );
}

export default App;
