import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

import Navbar from "./Components/Navbar";
import Anasayfa from "./Components/Pages/Anasayfa";
import About from "./Components/Pages/About";
import Contacts from "./Components/Pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Anasayfa" element={<Anasayfa />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
