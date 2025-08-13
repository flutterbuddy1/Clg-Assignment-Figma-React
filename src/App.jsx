import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web_Series from "./components/WebSeries";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webseries" element={<Web_Series />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;