import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Table from "./Tables";

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [table, setTable] = useState("");
  const [show, setShow] = useState(false);

  const getData = async (table) => {
    setData([]);
    if (data.length === 0) {
      await Axios.get("http://localhost:3001/sql_get" + table).then(
        (response) => {
          setData(response.data.result);
          setShow(true);
          setTable(table);
        }
      );
    } else {
      setData([]);
      setShow(false);
      setTable("");
    }
  };

  return (
    <div className="p-2">
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-6  gap-2 mx-2 mb-2 mt-5 ">
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => navigate("/animal-form")}
          >
            Add Animal
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => navigate("/enclosure-form")}
          >
            Add Enclosure
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => navigate("/vet-form")}
          >
            Add Vet
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => navigate("/animal-food-form")}
          >
            Add AnimalFood
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => navigate("/classification-form")}
          >
            Add Classification
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => navigate("/employee-form")}
          >
            Add Employee
          </button>
        </div>
        <div className="grid grid-cols-6  gap-2 mx-2 mb-2 mt-5 ">
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => {
              getData("Animals");
            }}
          >
            Show Animal
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => {
              getData("Enclosure");
            }}
          >
            show Enclosures
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => {
              getData("Vet");
            }}
          >
            Show Vet
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => {
              getData("AnimalFood");
            }}
          >
            Show Animal Food
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => {
              getData("Classifications");
            }}
          >
            Show classifications
          </button>
          <button
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:shadow-lg"
            onClick={() => {
              getData("Employee");
            }}
          >
            Show Employee
          </button>
        </div>
      </div>
      <div className="table">
        <Table type={table} data={data} />
      </div>
    </div>
  );
};

export default Admin;
