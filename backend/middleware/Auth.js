import jwt from "jsonwebtoken"
import { ApiError } from "../utilis/ApiError.js";

export const Auth=async(req,res,next)=>{
      try{
         const cookie=req.cookies.AcessToken;
           if(!cookie){
            throw new ApiError(400,"Email Does not exist");
           }
           const cookieData=await jwt.verify(cookie,process.env.ACESSTOKEN)
           req.email=cookieData.email;
           next();
           
      }
      catch(error){
        console.log(error)
      }
}