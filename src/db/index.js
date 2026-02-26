import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

//it is async becz db takes time
const connectDB = async () =>{
  try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  // process.env.MONGODB_URI= port number and DB mean videotube  //connect db using url from.env and the  w db(mongodb)
     console.log(`\n MONGODB Connected !! DB HOST: ${connectionInstance.connection.host}`)  //connectionInstance.connection.host  which server you are connected 

  } catch (error) {
    console.log("MONGODB connection Failed ",error);
    process.exit(1)
    
  }
}

export default connectDB