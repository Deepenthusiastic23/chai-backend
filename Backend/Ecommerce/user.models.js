import mongoose from "mongoose"

const userSchema =new mongoose.schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
   emial: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamp: true})


export const user = mongoose.model("User", userSchema)