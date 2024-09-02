import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

const connectDB =async()=>{
    try {
        console.log(process.env.MONGODB);
        const Instance = await mongoose.connect(`${process.env.MONGODB}`)
        
        console.log(`MongoDb connected !! DB Host : ${Instance.connection.host}`)  //! this is used to get the host
    } catch(err) {
        console.log("MongoDb connection error ",err)
        // throw err
    }
}

export default connectDB