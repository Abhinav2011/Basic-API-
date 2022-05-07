import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    }
})

export default mongoose.model('Data',Schema);