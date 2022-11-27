import React, { useState } from "react";
import Axios from "axios";

const Animal = () => {
  const [data, setData] = useState([]);

  const getAnimals = (type) => {
    console.log("yes");
    Axios.get("http://localhost:3001/sql_animals", {
      params: {
        type: type,
      },
    }).then((res) => {
      setData(res.data.result);
    });
    console.log("No");
  };

  return (
    <>
      <div>
        <div className="w-full h-screen bg-[url('https://www.mysuruzoo.info/images/adoption/adoption-bg.jpg')] bg-cover flex items-center mt-[-78px]">
          <div className=" w-full md:mx-center text sm:mx-20 2xs:mx-10 select-none">
            <h1 className="text-4xl   text-bold  text-white mx-20 font-sans">
              Our family
            </h1>
            <h1 className="text-7xl  text-bold  text-white ">MEMBERS</h1>
          </div>
        </div>
      </div>

      <div className="mt-9 mx-10 ">
        <h1 className="text-3xl text-orange-900 font-bold">Animals</h1>
        <br />
      </div>

      <div className="grid grid-cols-9  gap-2 mx-9 mb-2 mt-4">
        <button
          onClick={() => {
            getAnimals("all");
          }}
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          All
        </button>
        <button
          onClick={() => {
            getAnimals(7);
          }}
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          BIRDS
        </button>
        <button
          onClick={() => {
            getAnimals(6);
          }}
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          CARNIVORES
        </button>
        <button
          onClick={() => {
            getAnimals(10);
          }}
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          HERBIVORES
        </button>
        <button
          onClick={() => {
            getAnimals(11);
          }}
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          OMNIVORES
        </button>
        <button
          onClick={() => {
            getAnimals(8);
          }}
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          REPTILES
        </button>
        <button
          onClick={() => {
            getAnimals(9);
          }}
          className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          PRIMATES
        </button>
      </div>

      <div className="flex flex-wrap justify-center mt-5">
        {data.map((d) => (
          <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src={d.imageUrl}
                alt="avatar"
              />
              <div className="p-4">
                <h1 className="text-gray-900 font-bold text-lg uppercase">
                  {d.Name}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Animal;
