import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LatestInfo from "./pages/LatestInfo";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import './index.css';
import { List } from "./pages/List";
import {Logout} from "./pages/Logout";

function App() {
  return (
    <Router>
      <div>
        <Navbar  />
        <Routes>
          <Route path="/latest-info" element={<LatestInfo />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
