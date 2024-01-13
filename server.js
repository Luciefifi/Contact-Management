import express from 'express';
import dotenv from 'dotenv';
import contactRouter from './routes/contactRoute.js';
import  errorHandler  from './middlewares/errorHandler.js';
import { dbConnection } from './config/dbConnection.js';
import { userRouter } from './routes/userRoute.js';
dotenv.config()
const app = express()


const PORT = process.env.PORT || 5000;
dbConnection();
app.listen(PORT, ()=>{
    console.log(`The app is running on ${PORT}`)
})
app.use(express.json());
app.use("/api",contactRouter);
app.use("/api/user", userRouter)
app.use(errorHandler)
