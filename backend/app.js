import express  from "express";
import dotenv from "dotenv"
import conn from "./bd_conn.js";
import router from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import taskrouter from "./routes/taskRoutes.js";
import cors from "cors"

dotenv.config();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
  // origin: 'http://localhost:5173/',
  // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // allowedHeaders: 'Content-Type,Authorization',
  // exposedHeaders: 'Content-Range,X-Content-Range',
  // credentials: true,
  // maxAge: 3600,
}))
app.use("/api/v1",router);
app.use("/api/v1",taskrouter)

app.listen(process.env.PORT||5000,async()=>{
      await conn()
       console.log(`server working on port ${process.env.PORT}`)
})


