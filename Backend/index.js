import express from "express"
import connectDB from "./src/database/db.js";
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import Todo from './src/modules/todo.schema.js'


dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.listen(3000,()=>{
    console.log("listing on port");
})

connectDB();

app.get("/get",(req,res)=>{
    const todo = Todo.find()
    .then((result)=> res.json(result))
  .catch((err)=>res.json(err))
})

app.post('/add', async(req,res)=>{

    console.log(req.body.task);
   const task = req.body.task;
  
    const newTodo = await Todo.create({
        task:task
    }).then((result)=>console.log("saved")).catch((err)=>console.log(err));
    
})

app.delete('/get/:id',async(req,res)=>{
    console.log(req.params)

    const {id} = req.params
    await Todo.findByIdAndDelete({_id:id})
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
})


