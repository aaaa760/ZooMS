import React from "react";
import Main from "./Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Donate from "./Pages/Donate";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route exact path="/" element={<Main />} />
          <Route exact path="donate" element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
