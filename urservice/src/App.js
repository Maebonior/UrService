import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Plumbers from "./pages/Plumbers";
// import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Plumbers">
            <Plumbers />
          </Route>
        </Switch>
        {/* <Login /> */}
      </div>
    </Router>
  );
};

export default App;
