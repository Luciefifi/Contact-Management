import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
export const dbConnection = async () =>{
    try{
const connect = mongoose.connect(process.env.DATABASE_URL);
console.log("Database connected")
    }
    catch{
        console.log(err);
        process.exit(1)
    }
}