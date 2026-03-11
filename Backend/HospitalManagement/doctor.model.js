import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  salary:{
    type: String,
    required:true
  },
  qualification: {
    type: String,
    required:true
  },
  experienceInYears:{
    Type: Number,
    default: 0
  },
  worksInHospitals: [
    {
      type: mongoose.Schema.TypeS.ObjectId,
      ref:'Hospital'
    }
  ]
}, {timestamps: true})

export const DoctorRecord = mongoose.model(
  'Doctor',
 doctorSchema 
)