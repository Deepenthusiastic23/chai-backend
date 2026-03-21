// require ('dotenv').config({path: './env'})

import dotenv  from "dotenv";



// import mongoose from "mongoose "
// import { DB_NAME } from "./constants";

// import express from "express"
import { connect } from "./DB/index.js";

dotenv.config({
  path: './env'
})






connectDB()

/*
const app = express()

l;( async() =>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error
    })

    app.listen (process.env.PORT, () => {
      console.log(`App is listening on port $ {process.env.PORT}`);
      
    })
  } catch (error){
    console.log("ERROR: ", error);
    throw err
    

  }
})()
*/