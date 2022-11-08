import React from "react";
import Main from "./Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Donate from "./Pages/Donate";
import BookTicket from "./Pages/BookTicket";
import BookTicket_step_2 from "./Pages/BookTicket-2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route exact path="/" element={<Main />} />
          <Route exact path="donate" element={<Donate />} />
          <Route exact path="book-ticket" element={<BookTicket />} />
          <Route
            exact
            path="book-ticket/step-2"
            element={<BookTicket_step_2 />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
