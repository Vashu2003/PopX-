import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccountPage from "./pages/AccountPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/AccountPage" element={<AccountPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
