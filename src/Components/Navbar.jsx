import React, { useState, useContext } from "react";
import DropdownButton from "./DropdownButton";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";
import lion from "../assets/lion.png";

import { LoginContext } from "../contexts/LoginContext";

import Button from "./Button";

const Navbar = () => {
  const { loginStatus } = useContext(LoginContext);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/#about" },
    { name: "ANIMALS", link: "/animal" },
    { name: "VISIT", link: "/visit" },
  ];

  let [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      {/* <div className="shadow-md w-full top-0 sticky z-10 bg-gradient-to-tr from-green-300 via-green-200 to-green-500"> */}
      <div className="bg-white bg-opacity-30 shadow-md px-2 sm:px-4 py-2 sticky w-full z-10 top-0 left-0  backdrop-filter backdrop-blur-lg " >
        <div className="md:flex items-center justify-between  py-4 md:px-10 px-7 select-none">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-slate-800"
            onClick={() => navigate("/")}
          >
            <span className="text-3xl text-green-200 mr-2 pt-2">
            <img src={lion} className="w-7 h-7"/>
          </span>
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
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:mx-4 font-bold"
              >
                <a
                  href={link.link}
                  className="text-slate-800 hover:text-teal-300 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {loginStatus ? (
              <>
                <li className="md:ml-6 text-md md:my-0 my-7">
                  <Button func={() => navigate("/donate")}>Donate</Button>
                </li>
                <li className="md:ml-6 text-md md:my-0 my-7">
                  <Button func={() => navigate("/book-ticket")}>
                    Buy Tickets
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li
                  className="md:ml-6 text-md md:my-0 my-7"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Tooltip on bottom"
                >
                  <Button func={() => alert("Please login")}>Donate</Button>
                </li>
                <li className="md:ml-6 text-md md:my-0 my-7">
                  <Button func={() => alert("Please Login")}>
                    Buy Tickets
                  </Button>
                </li>
              </>
            )}
            <li className="md:ml-6 text-md md:my-0 my-7">
              {!loginStatus ? (
                <Button func={() => navigate("/login")}>Login</Button>
              ) : (
                <DropdownButton />
              )}
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
