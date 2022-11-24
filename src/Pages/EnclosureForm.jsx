import react , {useState} from "react";


const EnclosureForm = () => {
    const [size, setSize] = useState("")
    const [location, setLocation] = useState("")
    const [noOfAnimals, setNoOfAnimals] = useState()

    return (
        <>
        <div className="mt-10 ml-5 mr-5">
        <h1 className="block mb-2 text-sm font-medium text-gray-900">
            Add a Enclosure
        </h1>
        <form >
            <input type="text" name="owner" readOnly className="hidden"/>
            <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Enter Enclosure Size
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text" name="size"
                    placeholder="Enter Enclosure Size"
                    onChange={(e) => setSize(e.target.value)}
                />
                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">

                    Enter Enclosure Location
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text" name="location"
                    placeholder="Enter Enclosure Location"
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                    Number of Animals
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number" name="noOfAnimals"
                    placeholder="Enter Number of Animals"
                    onChange={(e) => setNoOfAnimals(e.target.value)}
                />
            </div>
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Enclosure
            </button>
        </form>
        </div>
        </>
    )
    
}
export default EnclosureForm;

