// MyForm.js
import EditableItem from './EditComponent.jsx';
import  { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [data,setdata]=useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log( inputValue);
    // Do something with the input value, e.g., send it to an API or perform some action
    const response= await axios.post("http://localhost:3000/api/v1/create",{inputValue})
    console.log(response.data.success)
    if(response.data.success){
      toast.success("Task added Sucessfully")
      fetchData()
    }
    setInputValue("")
  };
  const fetchData=async()=>{
    const response=await  axios.get("http://localhost:3000/api/v1/alltasks");
    setdata(response.data.data.task);
  }

  useEffect(()=>{
         
          fetchData();
          
  },[])
  console.log(data)



//   const data=[{
//     id:"kdjejfj",
//      value:"e2jifnfirn"
//   },
//   {
//     id:"kdjej",
//      value:"e2jifnfirn"
//   },
//   {
//     id:"kdfj",
//     value:"e2jifnfirn"
//   }
// ]
  return (
    <div className="h-screen flex flex-col items-center justify-start">
    <h1 className='w-fit mx-auto text-[60px]'>Task Management</h1>
      <form onSubmit={handleSubmit} className="bg-gray-200 sm:w-[400px]  p-6 rounded shadow-md mt-8 flex flex-col items-center max-w-xl">
        <label htmlFor="inputField" className="block text-lg font-medium text-gray-700 mb-2 ml-1">
          Enter Task:
        </label>
        <div className="flex items-center">
          <input
          
            type="text"
            id="inputField"
            name="inputField"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-1 p-2 border rounded-md sm:w-[300px] focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-full flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mx-auto" />
          </button>
        </div>
      </form>
      <div className='mt-[100px]'>
      {data?.map((item)=>{console.log(item)
        return <EditableItem key={item._id} {...item} fetchData={fetchData}/>})
    }
    </div>
    <ToastContainer/>
      
    </div>
  );
};

export default MyForm;










// // src/components/FormComponent.jsx
// import  { useState } from 'react';

// const Home = () => {
//   const [formData, setFormData] = useState({
//     inputText: '',
//     description: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic (e.g., send data to the server)
//     console.log('Form data submitted:', formData);
//   };

//   return (
    
//     <div className="max-w-md mx-auto mt-8 p-4 bg-gray-800 rounded-md shadow-md">
//     <h1 className='text-center text-white text-[30px]'>ADD YOUR TASK</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="inputText" className="block text-sm font-medium text-white">
//             Input Text
//           </label>
//           <input
//             type="text"
//             id="inputText"
//             name="inputText"
//             value={formData.inputText}
//             onChange={handleInputChange}
//             className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter text here"
//           />
//         </div>

//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-white">
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             rows="4"
//             className="mt-1 p-2 border rounded-md w-full resize-none focus:outline-none focus:ring focus:border-blue-300"
//             placeholder="Enter description here"
//           ></textarea>
//         </div>

//          <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 flex items-center justify-center mx-auto"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               />
//             </svg>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Home;
