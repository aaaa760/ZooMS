import React from "react";
import Axios from "axios";


const Animal = () => {

    const getAnimals = (id) => {
        Axios.get(`http://localhost:3001/animals/${id}`).then((response) => {
            console.log(response.data);
        });
    };

  return (
    <>
      <div>
        <div className="w-full h-screen bg-[url('https://www.mysuruzoo.info/images/adoption/adoption-bg.jpg')] bg-cover flex items-center mt-[-78px]">
          <div className=" w-full md:mx-center text sm:mx-20 2xs:mx-10 select-none">
            <h1 className="text-4xl   text-bold  text-white mx-20 font-sans">
              Our family 
            </h1>
            <h1 className="text-7xl  text-bold  text-white ">
              MEMBERS
            </h1>
          </div>
        </div>
      </div>

      <div className='mt-9 mx-10 '>
                <h1 className='text-3xl text-orange-900 font-bold'>Animals</h1>
                <br />
      </div>


      <div className="grid grid-cols-9  gap-2 mx-9 mb-2 mt-4">
       
       <button
         className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        
       >
         All
       </button>
       <button
         className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
         
       >
        BIRDS
       </button>
       <button
        className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
         
       >
         CARNIVORES
       </button>
       <button
       className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
         
       >
         HERBIVORES
       </button>
       <button
         className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
         
         >
        OMNIVORES
       </button>
       <button
        className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        
       >
        REPTILES
       </button>
       <button
        className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
        
       >
        PRIMATES
       </button>
     
   </div>


        <div className="flex flex-wrap justify-center mt-5">
            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden"> 
                    <img className="w-full h-56 object-cover object-center" src="https://media.istockphoto.com/id/514259332/photo/asiatic-lion.jpg?s=612x612&w=0&k=20&c=Xs3HkvVDmm8ZTzl8y437fTnIgstnf-Dlan2FQhwzGVs=" alt="avatar" />
                    <div className="p-4">
                        <h1 className="text-gray-900 font-bold text-lg uppercase">Lion</h1>
                        
                    </div>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden"> 
                    <img className="w-full h-56 object-cover object-center" src="https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg" alt="avatar" />
                    <div className="p-4">
                        <h1 className="text-gray-900 font-bold text-lg uppercase">Tiger</h1>
                        
                    </div>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden"> 
                    <img className="w-full h-56 object-cover object-center" src="https://thumbs.dreamstime.com/b/giraffe-kenya-4295827.jpg" alt="avatar" />
                    <div className="p-4">
                        <h1 className="text-gray-900 font-bold text-lg uppercase">Giraffe</h1>
                        
                    </div>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden"> 
                    <img className="w-full h-56 object-cover object-center" src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/162696-lrkfcomskj-1628694149.jpg" alt="avatar" />
                    <div className="p-4">
                        <h1 className="text-gray-900 font-bold text-lg uppercase">Elephant</h1>
                        
                    </div>
                </div>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden"> 
                    <img className="w-full h-56 object-cover object-center" src="https://images.indianexpress.com/2018/12/monkey.jpg" alt="avatar" />
                    <div className="p-4">
                        <h1 className="text-gray-900 font-bold text-lg uppercase">Monkey</h1>
                        
                    </div>
                </div>
            </div>
        </div>





    </>
  );
};

export default Animal;
