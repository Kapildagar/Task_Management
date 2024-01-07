import User from "../models/userModels.js";
import { ApiError } from "../utilis/ApiError.js";
import { asyncHandler } from "../utilis/AsynHandler.js";
import { ApiResponse } from "../utilis/ApiResponse.js";




const register=asyncHandler(async(req,res,next)=>{
    console.log(req.body)
    const {email,password,cpassword}=req.body;
   

    if(password!=cpassword){
        throw new ApiError(400,"Password doesnot match")
    }

    const user=await User.create({email,password});

    

    const senduser=await User.find({email}).select("-password");
   

   res
   .status(200)
   .json(
         new ApiResponse(
                200,{user:senduser},"user Crested Suceesfully"
         )
   )
})

const login=asyncHandler(async(req,res,next)=>{
       
    const {email,password}=req.body;
     
       const user=await User.findOne({email});
       if(!user){
        throw new ApiError(400,"User Does not exist");
       }
       
       const isPassword=await user.comparePassword(password);
       if(!isPassword){
        throw new ApiError(400,"Password is not correct");
       }
       const Acesstoken=await user.createAcessToken();
       user.AcessToken=Acesstoken;
       await user.save({ validateBeforeSave: false })

       console.log(Acesstoken);
       const senduser=await User.find({email}).select("-password");

       res.status(200).cookie("AcessToken",Acesstoken,{
        httpOnly:true
       }).json(
        new ApiResponse(200,{user:senduser},"login sucessfully")
       
       )

    
})

const logout=asyncHandler(async(req,res,next)=>{
           console.log(req.email)
           const email=req.email;
           if(!email){
            throw new ApiError(400,"Email Does not exist");
           }
           const user=await User.findOne({email});
           
           console.log(user)
            res.status(200).json({
                message:"logout"
            })
})


export {register,login,logout};