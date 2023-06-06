import React from "react";

import Registration from "./components/registration_page/registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login_page/login";
import Home from "./components/home_page/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
