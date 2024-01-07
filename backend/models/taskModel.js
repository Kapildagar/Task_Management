import mongoose from "mongoose";

const taskSchemma=new mongoose.Schema({
       task:{
        type:String,
        required:true,
       },
       checked:{
        type:Boolean,
        default:false
       }
})

const task=mongoose.model("Tasks",taskSchemma);


export default task;