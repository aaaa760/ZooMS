import React,{useState} from "react";

const AnimalFoodForm = () => {
    const [foodName, setFoodName] = useState("")
    const [foodStock, setFoodStock] = useState("")

    return (
        <>
        <div className="mt-10 ml-5 mr-5">
        <h1 className="block mb-2 text-sm font-medium text-gray-900">
            Add a Animal Food
        </h1>
        <form >
            <input type="text" name="owner" readOnly className="hidden"/>
            <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Enter Food Name
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="text" name="name"
                    placeholder="Enter Food Name"
                    onChange={(e) => setFoodName(e.target.value)}
                />
                <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
                    Enter Food Stock
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter Food Stock" name="stock"
                    onChange={(e) => setFoodStock(e.target.value)}
                ></input>
            </div>
            <button
              className=" w-1/6 bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-5"
              onClick={(e) => {
              }}
            >
             Add Animal
            </button>
        </form>
        </div>

        </>
    );
    }
export default AnimalFoodForm;