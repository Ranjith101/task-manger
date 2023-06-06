import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerPage from "./pages/ManagerPage";
import DeveloperPage from "./components/Developer";
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/developer" element={<DeveloperPage />} />
      </Routes>
    </Router>
  );
};

export default App;
