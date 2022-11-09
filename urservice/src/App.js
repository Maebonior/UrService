import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Plumbers from "./pages/Plumbers";
// import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Plumbers" element={<Plumbers />} />
        </Routes>

        {/* <Login /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
