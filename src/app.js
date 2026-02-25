import express from "express"
import cors from "cors"
import cookieParser  from "cookie-parser"
const app = express()

app.use(cors(
  {
    origin: ProcessingInstruction.env.CORS_ORIGIN,
    credentials:true,
  }
))

// middle were inditify (use)
app.use(express.json({limit:"16kb"})) // give json limit 
app.use(express.urlencoded({extended: true, limit:"16kb"}))  // in website url something show %20  so it is use to debug or get data
app.use(express.static("public"))  // public asset save image ,video etc



export { app }