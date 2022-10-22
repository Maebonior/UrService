import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
