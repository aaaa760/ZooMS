import React from "react";
import Button from "../Components/Button";

function Donate() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-center bg-emerald-400">
      <div className="flex gap-4 flex-row flex-wrap w-3/6 rounded-lg">
        <div className="p-5 pt-10 text-left flex-auto">
          <h1 className="text-2xl">Contribute towards</h1>
          <h1 className="text-2xl mb-3">ZooMS</h1>
          <p>Note:</p>
          <p>You can donate any amount you wish</p>
          <p>to contribute.</p>
        </div>
        <div className="bg-white p-3 rounded flex-auto">
          <p className="mb-6 bg-blue-200 h-auto text-center rounded-lg p-1">
            Donation Towards Zoo
          </p>
          <form class="w-full max-w-lg">
            <div className="m-5">
              <label
                class="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Name
              </label>
              <input
                class="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="m-5">
              <label
                class="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4"
                for="inline-full-city"
              >
                City
              </label>
              <input
                class="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-city"
                type="text"
                placeholder="Your City"
              />
            </div>
            <div className="m-5">
              <label
                class="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4"
                for="inline-full-email"
              >
                Your Email Id
              </label>
              <input
                class="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-email"
                type="email"
                placeholder="Your Email Address"
              />
            </div>
            <div className="m-5">
              <label
                class="block text-gray-500 text-left font-bold mb-1 md:mb-0 pr-4"
                for="inline-full-phone"
              >
                Please Enter Your Mobile Number
              </label>
              <input
                class="bg-gray-200 appearance-none border-2 my-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-phone"
                type="tel"
                placeholder="Your Mobile Number"
              />
            </div>
          </form>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Donate;
