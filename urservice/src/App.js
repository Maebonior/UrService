import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Plumbers from "./pages/Plumbers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <Plumbers />
    </div>
  );
};

export default App;
