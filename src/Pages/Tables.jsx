import Axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Table = ({ type, data }) => {

  
  const deleteAnimal = (id) => {
    
    Axios.post("http://localhost:3001/sql_deleteAnimal", {
        id: id,
    }).then((response) => {
      console.log(response);
      toast.success("Animal deleted");
    });
  };

  const deleteFood = (food_id) => {
    
    Axios.post("http://localhost:3001/sql_deleteFood", {
        food_id: food_id,
    }).then((response) => {
      console.log(response);
      toast.success("Food deleted");
    });
  };




  return (
    <>
    <ToastContainer />
      {type === "Animals" ? (
        <>
          <table className="mt-4 table-fixed w-full border-separate">
            <thead>
              <tr>
                <th className="border border-slate-300">ID</th>
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Gender</th>
                <th className="border border-slate-300">Weight</th>
                <th className="border border-slate-300">DOB</th>
                <th className="border border-slate-300">Classification</th>
                <th className="border border-slate-300">Enclosure</th>
                <th className="border border-slate-300">Delete Animal</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.ID} className="text-center">
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.ID}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Name}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Gender}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Weight}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.DOB.substring(0, 10)}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Class_Name}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.location}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    <button onClick={()=>deleteAnimal(d.ID)} className="bg-cyan-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> 
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : type === "Enclosure" ? (
        <>
          <table className="mt-4 table-fixed w-full border-separate">
            <thead>
              <tr>
                <th className="border border-slate-300">ID</th>
                <th className="border border-slate-300">Size (sqrt)</th>
                <th className="border border-slate-300">No of animals</th>
                <th className="border border-slate-300">Name of enclosure</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.ID} className="text-center">
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Enclosure_id}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.size}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.no_of_animals}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : type === "Vet" ? (
        <>
          <table className="mt-4 table-fixed w-full border-separate">
            <thead>
              <tr>
                <th className="border border-slate-300">ID</th>
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Qualification</th>
                <th className="border border-slate-300">Salary</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.ID} className="text-center">
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.vet_id}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Name}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.qualification}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : type === "AnimalFood" ? (
        <>
          <table className="mt-4 table-fixed w-full border-separate">
            <thead>
              <tr>
                <th className="border border-slate-300">ID</th>
                <th className="border border-slate-300">Food Name</th>
                <th className="border border-slate-300">Stock</th>
                <th className="border border-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.food_id} className="text-center">
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.food_id}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.name}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.stock}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    <button onClick={()=>deleteFood(d.food_id)} className="mx-2 bg-cyan-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : type === "Classifications" ? (
        <>
          <table className="mt-4 table-fixed w-full border-separate">
            <thead>
              <tr>
                <th className="border border-slate-300">ID</th>
                <th className="border border-slate-300">Classifiction Name</th>
                <th className="border border-slate-300">No of Animals</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.ID} className="text-center">
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Class_ID}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Class_Name}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.no_of_animals}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : type === "Employee" ? (
        <>
          <table className="mt-4 table-fixed w-full border-separate">
            <thead>
              <tr>
                <th className="border border-slate-300">ID</th>
                <th className="border border-slate-300">Name</th>
                <th className="border border-slate-300">Job Title</th>
                <th className="border border-slate-300">Supervisor Id</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.ID} className="text-center">
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.E_ID}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.Name}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.job_title}
                  </td>
                  <td className="border border-slate-300 pt-2 pb-2 border-spacing-12">
                    {d.SID}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Table;
