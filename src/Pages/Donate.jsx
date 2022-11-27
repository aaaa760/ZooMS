import React from "react";
import Button from "../Components/Button";
import { useState, useContext } from "react";
import Axios from "axios";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Donate() {


  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({});
  const [amount, setAmount] = useState(0);
  const { loginStatus, account } = useContext(LoginContext);
  

  const addDonation = () => {
    if (loginStatus) {
      Axios.post("http://localhost:3001/sql_donate", {
        name: name,
        city: city,
        email: email,
        phone: account,
        amount: amount,
      }).then(() => {
        console.log("Thank you for your Donation. Amount Donated " + amount);
        toast.success("Thank you for your Donation. Amount Donated " + amount);
       
      
      });

    }
  };

  const getDetails = () => {
    console.log("account: " + account);
    if (name && city && email) {
      setDetails({
        Name: name,
        City: city,
        Email: email
      });
      setShowDetails(true);
    }
    console.log(details);
  };

  return (
    <>
    <ToastContainer />
    <div className="w-screen h-screen flex justify-center items-center text-center bg-gradient-to-tr from-yellow-200 via-green-200 to-green-500">
      <div className="flex gap-4 flex-row flex-wrap w-3/6 rounded-lg">
        <div className="p-5 pt-10 text-left flex-auto">
          <h1 className="text-2xl">Contribute towards</h1>
          <h1 className="text-2xl mb-3">ZooMS</h1>
          <p>Note:</p>
          <p>You can donate any amount you wish</p>
          <p>to contribute.</p>
        </div>
        {!showDetails ? (
          <div className="bg-white p-3 rounded flex-auto">
            <p className="mb-6 bg-blue-200 h-auto text-center rounded-lg p-1">
              Donation Towards Zoo
            </p>
            <form className="w-full max-w-lg">
              <div className="m-5">
                <label className="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4">
                  Name
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="m-5">
                <label className="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4">
                  City
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-city"
                  type="text"
                  placeholder="Your City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="m-5">
                <label className="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4">
                  Your Email Id
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-email"
                  type="email"
                  placeholder="Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="m-5">
                <label className="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4">
                  Please Enter Your Mobile Number
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-phone"
                  type="tel"
                  placeholder="Your Mobile Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div> */}
            </form>
            <Button func={getDetails}>Next</Button>
          </div>
        ) : (
          <div className="bg-white p-3 rounded flex-auto pt-6 pb-6">
            <p className="mb-6 bg-blue-200 h-auto rounded-lg p-2 ml-auto mr-auto">
              Donation Towards Zoo
            </p>
            <table
              className="text-left ml-auto mr-auto"
              cellSpacing="20"
              border="1"
            >
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>{details.Name}</td>
                </tr>
                <tr>
                  <td>City: </td>
                  <td>{details.City}</td>
                </tr>
                <tr>
                  <td>Email: </td>
                  <td>{details.Email}</td>
                </tr>
                <tr>
                  <td>Phone No: </td>
                  <td>{details.Phone}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p className="text-left mt-6 ml-6">
                Please Choose or enter the amount you wish
              </p>
              <p className="text-left ml-6">to donate: </p>
              <ul className="grid gap-2 w-full md:grid-cols-4 mt-2 mb-3">
                <li className="form-check">
                  <input
                    className="hidden peer"
                    type="radio"
                    name="DonationRadio"
                    id="DonationRadio1"
                    value="1000"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label p-2 text-lg inline-flex justify-between items-center text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    htmlFor="DonationRadio1"
                  >
                    <span> &#x20b9; 1,000</span>
                  </label>
                </li>
                <li>
                  <input
                    className="hidden peer"
                    type="radio"
                    name="DonationRadio"
                    id="DonationRadio2"
                    value="5000"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label p-2 text-lg inline-flex justify-between items-center text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    htmlFor="DonationRadio2"
                  >
                    <span> &#x20b9; 5,000</span>
                  </label>
                </li>
                <li>
                  <input
                    className="hidden peer"
                    type="radio"
                    name="DonationRadio"
                    id="DonationRadio3"
                    value="10000"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label inline-flex justify-between items-center p-2 text-lg text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    htmlFor="DonationRadio3"
                  >
                    <span> &#x20b9; 10,000</span>
                  </label>
                </li>
                <li>
                  <input
                    className="hidden peer"
                    type="radio"
                    name="DonationRadio"
                    id="DonationRadio4"
                    value="25000"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label inline-flex justify-between items-center p-2 text-lg text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    htmlFor="DonationRadio4"
                  >
                    <span> &#x20b9; 25,000</span>
                  </label>
                </li>
              </ul>
              <input
                className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-phone"
                type="tel"
                value={amount}
                placeholder="Enter your own Amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <Button func={() => addDonation()}>Donate</Button>
          </div>
        )}
      </div>
    </div>
    </>
  );
  
}

export default Donate;
