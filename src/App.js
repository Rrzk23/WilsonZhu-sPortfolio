import React from "react";
import "./style.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Portfolio from "./routes/Portfolio"
import Contact  from "./routes/Contact";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";



function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
