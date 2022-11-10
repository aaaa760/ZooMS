import React from "react";
import Button from "../Components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios"

function BookTicket() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState({});
  //   const [amount, setAmount] = useState(0);

  const navigate = useNavigate();



  const getDetails = () => {
    if (name && city && email && date) {
      setDetails({
        Name: name,
        City: city,
        Email: email,
        Date: date,
      });
      navigate("/book-ticket/step-2");
    }
    console.log(details);
  };

  //   const BookTicket = () => {
  //     if (amount) {
  //       console.log("Thank you for your Donation. Amount Donated " + amount);
  //     }
  //   };

  return (
    <div className="w-screen h-screen flex justify-center items-center text-center bg-gradient-to-tr from-yellow-200 via-green-200 to-green-500">
      <div className="flex gap-4 flex-row flex-wrap w-3/6 rounded-lg">
        <div className="p-5 pt-10 text-left flex-auto">
          <h1 className="text-2xl font-black">Please Select the date</h1>
          <h1 className="text-2xl mb-8 font-black">you want to visit</h1>
          <p>Note:</p>
          <p className="mb-4">
            The following are not available for online booking
          </p>
          <p>
            <ul className="list-disc list-inside">
              <li>Parking and luggage tickets</li>
              <li>Tuesdays are holiday</li>
            </ul>
          </p>
        </div>
        <div className="bg-white p-3 rounded flex-auto">
          <form className="w-full" >
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
                required
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
                required
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
                required
              />
            </div>
            <div className="m-5">
              <label className="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4">
                Choose Date
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-phone"
                type="date"
                placeholder="Your Mobile Number"
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </form>
          <Button func={() => getDetails()} >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
