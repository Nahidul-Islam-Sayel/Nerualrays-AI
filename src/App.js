import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutSection from "./Componant/AboutSection/AboutSection";
import AllService from "./Componant/AllService/AllService";
import AllSolutionSection from "./Componant/AllSolutionSection/AllSolutionSection";
import ContactSection from "./Componant/ContactSection/ContactSection";
import Home from "./Componant/Homepage/Home.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutus" element={<><AboutSection /></>} />
        <Route path="/ourservice" element={<AllService/>}></Route>
        <Route path="/allsolution" element={<AllSolutionSection/>}></Route>
        <Route path="/ContactUs" element={<ContactSection/>}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
