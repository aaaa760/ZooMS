import React from "react";
import Button from "../Components/Button";
import { useState, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import Axios from "axios";

function BookTicket() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState({});
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const { loginStatus, account } = useContext(LoginContext);
  //   const [amount, setAmount] = useState(0);

  const getDetails = () => {
    if (adult!==0 || child!==0) {
      if (name && city && email && date) {
        if (loginStatus) {
          Axios.post("http://localhost:3001/sql_book_ticket", {
            Phone: account,
            Name: name,
            City: city,
            Email: email,
            Date: date,
            Adult: adult,
            Child: child,
          }).then(() => {
            console.log("Your ticket is booked");
            alert("Thank you " + name + " for booking ticket");
          });
        }
    }
      // setDetails({
      //   Name: name,
      //   City: city,
      //   Email: email,
      //   Date: date,
      //   Adult: adult,
      //   Child: child,
      //   Adult_price: adult * 100,
      //   Child_price: child * 50,
      //   Total_price: adult * 100 + child * 50,
      // });

      // console.log(details);
    }
    console.log("Done");
  };

  //   const BookTicket = () => {
  //     if (amount) {
  //       console.log("Thank you for your Donation. Amount Donated " + amount);
  //     }
  //   };

  return (
    <>
      {page1 ? (
        <div className="w-screen h-screen flex justify-center items-center text-center bg-gradient-to-tr from-yellow-200 via-green-200 to-green-500">
          <div className="flex gap-4 flex-row flex-wrap w-3/6 rounded-lg">
            <div className="p-5 pt-10 text-left flex-auto">
              <h1 className="text-2xl font-black">Please Select the date</h1>
              <h1 className="text-2xl mb-8 font-black">you want to visit</h1>
              <p>Note:</p>
              <p className="mb-4">
                The following are not available for online booking
              </p>
              <>
                <ul className="list-disc list-inside">
                  <li>Parking and luggage tickets</li>
                  <li>Tuesdays are holiday</li>
                </ul>
              </>
            </div>
            <div className="bg-white p-3 rounded flex-auto">
              <form className="w-full">
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
              <Button
                func={() => {
                  setPage1(false);
                  setPage2(true);
                  setPage3(false);
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      ) : page2 ? (
        <div className="flex justify-center items-center bg-teal-300 w-screen h-screen">
          <div className="flex w-5/12">
            <div className="grid grid-columns-1 grid-rows-4 gap-6 w-full bg-white p-8 rounded-lg text-center h-fit">
              <div>
                <p className="bg-teal-200 rounded-lg p-2">Zoo Entrance</p>
              </div>
              <table className="w-full border-separate text-left ml-auto mr-auto table-auto">
                <tbody>
                  <tr className="border-b-8 border-gray-500">
                    <td>Child (5-12 years)</td>
                    <td>50</td>
                    <td>
                      <div className="flex justify-between">
                        <button
                          onClick={() => {
                            const temp = child !== 0 ? child - 1 : child;
                            setChild(temp);
                          }}
                        >
                          -
                        </button>
                        <span>{child}</span>
                        <button
                          onClick={() => {
                            const temp = child + 1;
                            setChild(temp);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Adult</td>
                    <td>100</td>
                    <td>
                      <div className="flex justify-between">
                        <button
                          onClick={() => {
                            const temp = adult !== 0 ? adult - 1 : adult;
                            setAdult(temp);
                          }}
                        >
                          -
                        </button>
                        <span>{adult}</span>
                        <button
                          onClick={() => {
                            const temp = adult + 1;
                            setAdult(temp);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="w-full border-separate text-left ml-auto mr-auto table-auto">
                <tbody>
                  <tr className="border-b-8 border-gray-500">
                    <td>Total Tickets</td>
                    <td>
                      <div className="flex justify-between">
                        <span>{child + adult}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Price</td>
                    <td>
                      <div className="flex justify-between">
                        <span>{child * 50 + adult * 100}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <Button
                  func={() => {
                    setPage1(false);
                    setPage2(true);
                    setPage3(false);
                    getDetails();
                  }}
                >
                  Proceed To Pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : page3 ? (
        <></>
      ) : (
        <></>
      )}
    </>
  );
}

export default BookTicket;
