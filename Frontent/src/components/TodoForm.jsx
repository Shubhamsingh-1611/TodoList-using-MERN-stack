import React, { useState } from 'react';
import axios from 'axios'


function TodoForm() {
    const [task,setTask] = useState("");
    
const handlesubmit = (e)=>{
  e.preventDefault();
  axios.post('http://localhost:3000/add',{task:task})
  .then((result)=> console.log(result))
  .catch((err)=>console.log(err));

}

  return (
    <div>
      <form>
        <input className='' placeholder='Enter new Todo...' onChange={(e)=>setTask(e.target.value)} />
         <button type='submit' onSubmit={handlesubmit} >Add Task</button>
        <hr/>
        
      </form>
    </div>
  )
}

export default TodoForm
