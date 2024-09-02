import React, { useState } from 'react';
import axios from 'axios'


function TodoForm() {
    const [task,setTask] = useState("");
    
const handlesubmit = (e)=>{

  e.preventDefault();
  console.log("handling submit");
  console.log(task);
  axios.post('http://localhost:3000/add',{task:task})
  .then((result)=> console.log("sent"))
  .catch((err)=>console.log(err));
  

}

  return (
    <div>
      <form>
        <input  placeholder='Enter new Todo...' onChange={(e)=>setTask(e.target.value)} className='h-[48px] w-[400px] border-none  rounded-l-2xl hover:border-none' />
         <button type='button' onClick={handlesubmit} className='bg-black text-white rounded-r-2xl w-[100px] h-[50px]'>Add Task</button>
      
        
      </form>
    </div>
  )
}

export default TodoForm
