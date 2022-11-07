import React, { useState, useContext } from "react";
import DropdownButton from "./DropdownButton";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";

// import { LoginContext } from "../contexts/LoginContext";

import Button from "./Button";

const Navbar = () => {
  //   const { loginStatus } = useContext(LoginContext);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "ANIMALS", link: "/" },
    { name: "VISIT", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  const navigate = useNavigate();

  //   function navigateLogin() {
  //       navigate("/login");
  //   };

  //   function navigateProfile() {
  //     navigate("/profile");
  //   }

  return (
    <>
      <div className="shadow-md w-full top-0 sticky bg-slate-700 z-10">
        <div className="md:flex items-center justify-between bg-opacity-75 py-4 md:px-10 px-7 select-none">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-slate-100"
          >
            {/* <span className="text-3xl text-green-800 mr-1 pt-2">
            <ion-icon name="leaf-sharp"></ion-icon>
          </span> */}
            Zooms
          </div>

          <div
            onClick={() => {}}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 bg-white" : "top-[-490px]"
            } overflow-y-auto`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-l md:my-0 my-7 font-sans"
              >
                <a
                  href={link.link}
                  className="text-slate-100 hover:text-teal-200 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="md:ml-6 text-md md:my-0 my-7">
              <Button func={() => navigate("/donate")}>Donate</Button>
            </li>
            <li className="md:ml-6 text-md md:my-0 my-7">
              {!false ? <Button>Buy Tickets</Button> : <DropdownButton />}
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
