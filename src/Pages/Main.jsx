import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { LoginContext } from "../contexts/LoginContext";
import Home from "./Home";

import Admin from "./Admin";

function Main() {
  const { loginStatus } = useContext(LoginContext);
  const [role, setRole] = useState();
  
  useEffect(() => {
    if (loginStatus) {
      Axios.get("http://localhost:3001/sql_login").then((response) => {
        if (response.data.loggedIn === true) {
          // setRole(response.data.user[0].role);
          console.log(response.data.user[0].role);
          setRole(response.data.user[0].role);
        }
      });
    }
  }, [loginStatus]);

  return (
    <>
      {role === "admin" ? (
        <>
        <Admin/>
       
      </>
      ) : (
        <Home/>
      )}
    </>
  );
}

export default Main;
