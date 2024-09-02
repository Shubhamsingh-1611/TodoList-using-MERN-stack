import React, { useState } from 'react'
import Header from './Header';
import TodoForm from './TodoForm.jsx'

function Home() {
    const [todos,setTodos] = useState([]);
  return (
    <>
    <Header/>
    <TodoForm/>
    {
       todos.length===0?<div>No Record</div>: todos.map((todo)=>(<div>
        {todo}
       </div>))
    }
    </>
  )
}

export default Home
