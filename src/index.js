// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
  path: './.env'
})


connectDB()   //it give promises so we do
.then(() =>{
  app.listen(process.env.PORT || 8000)     // listen the incoming request on port
  console.log(`server is running at port: ${process.env.PORT}`);    //db connect sucessfully
})
.catch((error) =>{
  console.log("MONGO DB CONNECTION FAILED !!!" ,error)
})


























// import express from "express"
// const app= express()

// (async() => {
//   try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//           console.log("error", error);
//         })

//         app.listen(process.env.PORT, () => {
//           console.log(`app is listening on port ${process.env.PORT}`);
//         })


//   } catch (error) {
//     console.error("error", error)
//     throw error
//   }

// })()