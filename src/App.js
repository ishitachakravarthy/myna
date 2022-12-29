import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home.js";
import Navbar from "./components/pages/Navbar.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Home />
        </div>
      </BrowserRouter>
  );
}

export default App;
