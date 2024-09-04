import mongoose from "mongoose";

export const connect = ()=>{
    try{
        mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected")
    }
    catch(err){
        console.log(err)
    }
}