import express from "express"
import cors from "cors"
import cookieParser  from "cookie-parser"
//create server app
const app = express()   

app.use(cors(
  {
      origin: process.env.CORS_ORIGIN,
    // origin: ProcessingInstruction.env.CORS_ORIGIN,

    credentials:true,
  }
))

// middle were inditify (use)   // middleware that run before routes
app.use(express.json({limit:"16kb"})) // allow max size json data
app.use(express.urlencoded({extended: true, limit:"16kb"}))  // in website url something show %20  so it is use to debug or get data using in login forms
app.use(express.static("public"))  // public asset save image ,video  , document  etc


//routes import

import userRouter from './routes/user.routes.js'
 
// routes declaration
app.use("/api/v1/users", userRouter)

//http://licalhost:8000/api/v1/users/register

export { app }