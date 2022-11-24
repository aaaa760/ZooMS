import React ,{useState} from "react"


const VetForm = () => {
    const [vet, setVet] = useState("")
    const [qualification, setQualification] = useState("")
    const [salary , setSalary] = useState()
    return (
        <>
        <div className="mt-10 ml-5 mr-5">
        <h1 className="block mb-2 text-sm font-medium text-gray-900">
            Add a Vet
        </h1>
        <form >
            <input type="text" name="owner" readOnly className="hidden"/>
            <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Enter Vet Name
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text" name="name"
                    placeholder="Enter Vet Name"
                    onChange={(e) => setVet(e.target.value)}
                />
                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                    Enter Vet Qualification
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter Vet Qualification" name="qualification"
                    onChange={(e) => setQualification(e.target.value)}
                ></input>

                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                    Enter Vet Salary
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number" name="salary"
                    placeholder="Enter Vet Salary"
                    onChange={(e) => setSalary(e.target.value)}
                />
                 <button
              className=" w-1/6 bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-5"
              onClick={(e) => {
              }}
            >
             Add Animal
            </button>
            </div>
        </form>
        </div>


        </>
    )
    
}
export default VetForm;