import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
    const navigate = useNavigate()
    const [name ,setName] = useState("")
    const [jobTitle, setJobTitle] = useState("")
    const [sid,setSid] = useState("")
    return (
        <>
        <div className="mt-10 ml-5 mr-5">
        <h1 className="block mb-2 text-sm font-medium text-gray-900">
          Add a Employee
        </h1>

        <form >
            <input type="text" name="owner" readOnly className="hidden"/>
            <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Enter Employee Name
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text" name="name"
                placeholder="Enter Employee Name"
                onChange={(e) => setName(e.target.value)}
            />
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                Job Title
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Employee Job Title" name="jobTitle"
                onChange={(e) => setJobTitle(e.target.value)}
            ></input>
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
            Employee sid
            </label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="number" name="sid"
                placeholder="Enter Employee sid"
                onChange={(e) => setSid(e.target.value)}
            />
           <button
              className=" w-1/6 bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-5"
              onClick={(e) => {
              }}
            >
             Add Employee
            </button>    
          </div>
        </form>
        </div>
        </>
    );
    }
export default EmployeeForm;