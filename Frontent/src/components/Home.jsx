import React, { useEffect, useState } from 'react'
import Header from './Header';
import TodoForm from './TodoForm.jsx'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

const handleClick=(id)=>{
  console.log("clicked")
  axios.delete('http://localhost:3000/get/'+id)
  .then((res)=>console.log("deleted"))
  .catch((err)=>console.log(err))
}

const handleDone=()=>{

}

function Home() {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
     axios.get('http://localhost:3000/get')
     .then((res)=>setTodos(res.data))
     .catch((err)=>console.log(err))
    },[todos])
  return (
    <>
    <Header/>
    <div className='flex justify-center items-center'>
    <TodoForm/>
    </div>
    {
       todos.length===0 ? <div>No Record</div>: todos.map( todo => (
       <div>
        <div onClick={()=>(handleDone(todo._id))} className='inline'>
        <LibraryAddCheckIcon/>
        </div>
        {todo.task}
        <button type='button' onClick={()=>(handleClick(todo._id))}>
        <DeleteIcon/>
        </button>
        
       </div>
       ))
    }
    </>
  )
}

export default Home
