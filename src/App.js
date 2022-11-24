import React from "react";
import Main from "./Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Donate from "./Pages/Donate";
import BookTicket from "./Pages/BookTicket";
import BookTicket_step_2 from "./Pages/BookTicket-2";
import BookTicket_step_3 from "./Pages/BookTickets-3";
import Login from "./Pages/Login";
import { LoginContext, LoginProvider } from './contexts/LoginContext';
import Visit from "./Pages/Visit";
import AnimalForm from "./Pages/AnimalForm";
import AnimalFoodForm from "./Pages/AnimalFoodForm";
import ClassificationForm from "./Pages/ClassificationForm";
import EmployeeForm from "./Pages/EmployeeForm";
import VetForm from "./Pages/VetForm";
import EnclosureForm from "./Pages/EnclosureForm";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <LoginProvider>
    <BrowserRouter>
      <Routes>
      <Route exact path="login" element={<Login />} />
        <Route element={<Navbar />}>
          <Route exact path="/" element={<Main />} />
          <Route exact path="donate" element={<Donate />} />
          <Route exact path="book-ticket" element={<BookTicket />} />
          <Route exact path="book-ticket/step-2" element={<BookTicket_step_2 />}/>
          <Route exact path="book-ticket/step-3" element={<BookTicket_step_3 />}/>
          <Route exact path="visit" element={<Visit />} />
          <Route exact path="animal-form" element={<AnimalForm />} />
          <Route exact path="animal-food-form" element={<AnimalFoodForm />} />
          <Route exact path="classification-form" element={<ClassificationForm />} />
          <Route exact path="employee-form" element={<EmployeeForm />} />
          <Route exact path="vet-form" element={<VetForm />} />
          <Route exact path="enclosure-form" element={<EnclosureForm />} />
        </Route>
        <Route element ={<Footer />} />
         
      </Routes>
    </BrowserRouter>
    </LoginProvider>
  );
}
