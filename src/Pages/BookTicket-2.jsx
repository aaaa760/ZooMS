import Button from "../Components/Button";
import { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

function BookTicket_step_2() {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const { setVisitor } = useContext(LoginContext);
  const navigate = useNavigate();

  const proceed = () => {
    if (adult || child) {
      setVisitor([adult, child]);
      console.log("Done");
    }
    navigate("/book-ticket/step-3");
  };
  return (
    <></>
  );
}

export default BookTicket_step_2;
