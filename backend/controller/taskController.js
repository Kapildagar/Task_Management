import Task from "../models/taskModel.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { asyncHandler } from "../utilis/AsynHandler.js";


const createTask=asyncHandler(async(req,res,next)=>{
    console.log(req.body)
    const {inputValue:task}=req.body;
    if(!task){
        throw new ApiError("400","Enter The Task")
    }
   const createTask=await Task.create({task});
    
   console.log(createTask)
   res.status(200).json(
    new ApiResponse(200,{task:createTask},"Task added SucessFully")
   )
})

const getTask=asyncHandler(async(req,res,next)=>{
    const tasks=await Task.find()
    console.log(tasks);
    res.status(200).json(
        new ApiResponse(200,{task:tasks},"Task updated SucessFully")
       )
})

const updateTask=asyncHandler(async(req,res,next)=>{
    // console.log(req.params);
    const {id}=req.params;
    console.log("working")
    console.log(id)
    if(!id){
        throw new ApiError(400,"Not Task exist")
    }
    console.log(req.body)
    const updateTask=req.body.editedValue
    // console.log(updateTask)
    // console.log(id)
    const uptask=await Task.findByIdAndUpdate({_id:id},{task:updateTask},{new:true});
    // console.log(uptask)
    res.status(200).json(
        new ApiResponse(200,{task:uptask},"Task updated SucessFully")
       )
})

const DeleteTask=asyncHandler(async(req,res,next)=>{
    const {id}=req.params;
    if(!id){
        throw new ApiError(400,"Not Task exist")
    }
    await Task.findByIdAndDelete({_id:id});
    res.status(200).json(
        new ApiResponse(200,{},"Task Deleted SucessFully")
       )

})

export {createTask,updateTask,getTask,DeleteTask}