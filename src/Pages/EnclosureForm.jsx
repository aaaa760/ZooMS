import react , {useState} from "react";
import Axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EnclosureForm = () => {
    const [size, setSize] = useState("")
    const [location, setLocation] = useState("")
    const [noOfAnimals, setNoOfAnimals] = useState()

    const addEnclosure = () => {
        Axios.post("http://localhost:3001/sql_addEnclosure", {
            size: size,
            location: location,
            noOfAnimals: noOfAnimals,
        }).then((response) => {
            console.log(response);
            toast.success("Enclosure Added");
            setSize("");
            setLocation("");
            setNoOfAnimals(0);
        });
    };


    return (
        <>
        <ToastContainer/>
        <div className="mt-10 ml-5 mr-5">
        <h1 className="block mb-2 text-sm font-medium text-gray-900">
            Add a Enclosure
        </h1>
       
            <input type="text" name="owner" readOnly className="hidden"/>
            <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Enter Enclosure Size
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text" name="size"
                    placeholder="Enter Enclosure Size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">

                    Enter Enclosure Name
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text" name="location"
                    placeholder="Enter Enclosure Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                    Number of Animals
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number" name="noOfAnimals"
                    placeholder="Enter Number of Animals"
                    value={noOfAnimals}
                    onChange={(e) => setNoOfAnimals(e.target.value)}
                />
            </div>
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addEnclosure}>
                Add Enclosure
            </button>
       
        </div>
        </>
    )
    
}
export default EnclosureForm;

