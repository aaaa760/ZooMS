import React, { useState } from "react";
import Axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClassificationForm = () => {
  const [className, setClassName] = useState("");
  const [noOfAnimals, setNoOfAnimals] = useState(0);

  const addClassification = () => {
    Axios.post("http://localhost:3001/sql_addClassification", {
      className: className,
      noOfAnimals: noOfAnimals,
    }).then((response) => {
      console.log(response);
      toast.success("Classification Added");
      setClassName("");
      setNoOfAnimals(0);
    });
  };

  return (
    <>
      <ToastContainer/>
      <div className="mt-10 ml-5 mr-5">
        <h1 className="block mb-2 text-sm font-medium text-gray-900">
          Add a Classification
        </h1>

        <input type="text" name="owner" readOnly className="hidden" />
        <div className="flex flex-col">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Enter Classification Name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="Enter Classification Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
            Number of Animals
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="number"
            value={noOfAnimals}
            placeholder="Enter Number of Animals"
            onChange={(e) => setNoOfAnimals(e.target.value)}
          />
        </div>
        <button
          className="mt-5 bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addClassification}
        >
          Add Classification
        </button>
      </div>
    </>
  );
};
export default ClassificationForm;
