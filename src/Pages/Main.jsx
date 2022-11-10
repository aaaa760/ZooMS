import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { LoginContext } from "../contexts/LoginContext";

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
      {role === "visitor" ? (
        <div>Visitor</div>
      ) : role === "admin" ? (
        <div>Admin</div>
      ) : (
        <div>Hello, wlcm to main</div>
      )}
    </>
  );
}

export default Main;
