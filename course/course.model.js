import mongoose from "mongoose";

//set rule/schema/structure

const courseSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    maxlength:60,
  },
  price:{
    type:Number,
    required:true,
    min:0,
  },
  duration: {
    type:Number,
    required:true,
    min:1,
  },
  addedBy:{
    type:mongoose.ObjectId,
    ref:"Admin",
    required:true,
  },
});

//create model/table
const Course =mongoose.model("Course", courseSchema);

export default Course;
