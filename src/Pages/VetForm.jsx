import React ,{useState} from "react"
import Axios from "axios";


const VetForm = () => {
    const [vet, setVet] = useState("")
    const [qualification, setQualification] = useState("")
    const [salary , setSalary] = useState()

    const addVet = () => {
        Axios.post("http://localhost:3001/sql_addVet", {
            vet: vet,
            qualification: qualification,
            salary: salary,
        }).then((response) => {
            console.log(response);
            alert("Vet Added");
            setVet("");
            setQualification("");
            setSalary(0);
        });
    };


    return (
        <>
        <div className="mt-10 ml-5 mr-5">
        <h1 className="block mb-2 text-sm font-medium text-gray-900">
            Add a Vet
        </h1>
        
            <input type="text" name="owner" readOnly className="hidden"/>
            <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Enter Vet Name
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text" name="name"
                    placeholder="Enter Vet Name"
                    value={vet}
                    onChange={(e) => setVet(e.target.value)}
                />
                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                    Enter Vet Qualification
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter Vet Qualification" name="qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                ></input>

                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                    Enter Vet Salary
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number" name="salary"
                    placeholder="Enter Vet Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <button className=" w-1/6 bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-5" onClick={addVet}>
                Add Vet
            </button>
            </div>
       
        </div>


        </>
    )
    
}
export default VetForm;