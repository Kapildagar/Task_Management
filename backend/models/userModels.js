import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken"

const UserSchemma=new mongoose.Schema({
    email:{
        type:String,
        unique:[true,"Email already Exist"],
        required:[true,"Enter the Email"]
    },
    password:{
        type:String,
        required:[true,"Enter the Password"]
    },
    AcessToken:{
        type:String
    }

})


UserSchemma.pre("save",async function(next){
    if(!this.isModified("password"))return next();

    this.password=await bcrypt.hash(this.password,10);
    next()
})


UserSchemma.methods.comparePassword=async function(password){
      return await bcrypt.compare(password,this.password);
}

UserSchemma.methods.createAcessToken=async function(){

   return await jsonwebtoken.sign({email:this.email},process.env.ACESSTOKEN,{
        expiresIn:process.env.ExpriesIn
    })
}




const User=mongoose.model("User",UserSchemma);


export default User;