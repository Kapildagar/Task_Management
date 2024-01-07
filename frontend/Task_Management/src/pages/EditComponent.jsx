import  { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {faTrashCan, faPenToSquare,faXmark,faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
const EditableItem = ({checked,_id,task,fetchData} ) => {
    console.log(task)
    const id=_id;
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task);
  const [Check,setCheck]=useState(checked)
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async() => {
    // Save the changes, for example, by updating state or making an API call
    // For now, let's just log the edited value
    console.log(id)
    console.log(editedValue)
    const response =await axios.put(`http://localhost:3000/api/v1/update/${id}`,{editedValue});
    console.log(response);
    if(response.data.success){
      toast.success("Updated Sucessfully")
      fetchData();
    }
    console.log('Edited Value:', editedValue);

    setIsEditing(false);
  };
  const handleDelet=async()=>{
    const response=await axios.delete(`http://localhost:3000/api/v1/delettask/${id}`)
    console.log(response);
    if(response.data.success){
      toast.success("Deleted Sucessfully")
      fetchData();
    }
  }

  const handleInputChange = (e) => {
    setEditedValue(e.target.value);
  };

  return (
    <div className="flex items-center border-2 border-black rounded-md h-[50px] w-[400px] relative mb-2">
      <input type="checkbox" checked={Check} onChange={()=>setCheck(!Check)}  className="mr-2 ml-2 cursor-pointer" />
      {isEditing ? (
        <input
          type="text"
          value={editedValue}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      ) : (
        <span className="mr-2">{task}</span>
      )}
      <button onClick={handleEditClick} className="mr-2 p-2 bg-blue-500 text-white rounded-lg absolute right-[70px] cursor-pointer">
        {isEditing ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={ faPenToSquare} />}
      </button>
      <button onClick={handleSaveClick} className="p-2 bg-green-500 text-white rounded-lg absolute right-[40px] cursor-pointer">
      <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
      <button onClick={handleDelet} className="ml-2 p-2 bg-red-500 text-white rounded-lg absolute right-[2px] cursor-pointer">
      <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <ToastContainer/>
    </div>
  );
};

export default EditableItem;