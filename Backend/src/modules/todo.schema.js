import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const Todo =  mongoose.model("Todo",todoSchema);

export default Todo;