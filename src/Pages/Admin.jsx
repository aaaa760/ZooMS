import react from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="grid grid-cols-6  gap-2 mx-2 mb-2 mt-5 ">
       
       <button
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         onClick={() => navigate("/animal-form")}
       >
         Add Animal
       </button>
       <button
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         onClick={() => navigate("/enclosure-form")}
       >
        Add Enclosure
       </button>
       <button
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         onClick={() => navigate("/vet-form")}
       >
         Add Vet
       </button>
       <button
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         onClick={() => navigate("/animal-food-form")}
       >
         Add AnimalFood
       </button>
       <button
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         onClick={() => navigate("/classification-form")}
         >
        Add Classification
       </button>
       <button
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         onClick={() => navigate("/employee-form")}
       >
        Add Employee
       </button>
     
   </div>
        </>
    );
    }

    export default Admin;