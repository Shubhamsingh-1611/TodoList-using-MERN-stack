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



function Home() {
    const [todos,setTodos] = useState([]);
    const [done,setDone] = useState(false);

    const handleDone=(id)=>{
      console.log("clicked")
      setDone((done)=>!done);
      console.log(done)
      axios.put('http://localhost:3000/update/'+id,{done:done})
      .then((res)=> console.log("updated"))
      .catch((err)=> console.log(err))
      }

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
    <div className='flex flex-col justify-center items-center'>
    {
       todos.length===0 ? <div>No Record</div>: todos.map( todo => (
       <div className='h-[40px] w-[350px] bg-[#232f30] mb-1 rounded-2xl flex justify-between items-center text-white'>
        <div onClick={()=>(handleDone(todo._id))} className='inline'>
        <LibraryAddCheckIcon/>
        </div>
        <p className={todo.done?"line-through bg-green-300 text-black":""}>
        {todo.task}
        </p>
        <button type='button' onClick={()=>(handleClick(todo._id))}>
        <DeleteIcon/>
        </button>
        
       </div>
       ))
    }
    </div>
    </>
  )
}

export default Home
