import express from "express"
import connectDB from "./src/database/db.js";
import dotenv from 'dotenv';
import cors from 'cors';

app.use(cors());
dotenv.config()
const app = express();

app.listen(3000,()=>{
    console.log("listing on port");
})



connectDB();