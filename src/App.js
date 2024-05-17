import "./App.css";
import LoginPage from "./component/LoginPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./component/RegisterScreen";
import Home from "./component/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
