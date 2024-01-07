import mongoose from "mongoose";


const conn=async()=>{
       try{
     const response=await mongoose.connect("mongodb://localhost:27017/task");
      console.log(`connectes to Database`);
       }
       catch(err){
        console.log(err);
       }
}
export default conn;