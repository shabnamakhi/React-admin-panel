import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Sidebar from "./components/Dashboard/Sidebar";
import Team from "./pages/Team";

function App() {
  return (
    <>
      {/* pager er under e jotogula route ase */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
