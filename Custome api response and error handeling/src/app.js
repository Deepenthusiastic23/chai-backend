import connectDB from "./db"

dotenv.config({
  path: './env'
})

connectDB()
.then()
.catch((err) => {
  console.log("MONGO db connect");
  
})