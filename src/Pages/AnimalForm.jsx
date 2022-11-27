import  Axios from "axios";
import React, { useState, useContext  } from "react";
import { LoginContext } from "../contexts/LoginContext";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AnimalForm = () => {
    const [animal, setAnimal] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState()
    const [weight, setWeight] = useState()
    const [class_id, setClass_id] = useState("")
    const [vet, setVet] = useState("")
    const [image, setImage] = useState("")
    const { loginStatus, account } = useContext(LoginContext);
    
   const addAnimal = () => {
     
      Axios.post("http://localhost:3001/sql_addAnimal",  {
        animal: animal,
        gender: gender,
        dob: dob,
        weight: weight,
        class_id: class_id,
        vet: vet,
        image: image,
      }).then((response) => {
        console.log(response);
        toast.success("Animal Added");
        setAnimal("");
        setGender("");
        setDob("");
        setWeight("");
        setClass_id("");
        setVet("");
        setImage("")
      });
      
    };

    return (
        <>
        <ToastContainer/>
        <div className="mt-10 ml-5 mr-5">
        <h1 className="block mb-2 text-sm font-medium text-gray-900">
          Add a Animal
        </h1>
       
            <input type="text" name="owner" readOnly className="hidden"/>
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Enter Animal Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text" name="name"
              placeholder="Enter Animal Name"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
            />
            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
              Gender
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter Animal Gender" name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>

            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
             Animal Weight
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="number" name="weight"
              placeholder="Enter animal weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
             Date of birth
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="date" name="dob"
              placeholder="Enter animal date of birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

           

            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
             Enter your class id
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="number" name="class-id"
              placeholder="Enter class id"
              value={class_id}
              onChange={(e) => setClass_id(e.target.value)}
            />

            <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
             Enter your vet id
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="number" name="vet-id"
              placeholder="Enter vet id"
              value={vet}
              onChange={(e) => setVet(e.target.value)}
            />

      <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 ">
             Enter Animal image url
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text" name="image-url"
              placeholder="Enter image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <button
              className=" w-1/6 bg-cyan-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-5"
              onClick={addAnimal}
            >
             Add Animal
            </button>
            
          </div>
        
      </div>
    </>
    )
}

export default AnimalForm