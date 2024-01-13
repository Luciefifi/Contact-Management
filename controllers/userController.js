import asynchHandle from 'express-async-handler'
import { User } from '../models/userModel.js'
import bcrypt from 'bcrypt';
import  Jwt  from 'jsonwebtoken';

export const registerUser =  asynchHandle(async (req,res)=>{
    const {userName, email, password} =  req.body;
    if(!userName|| !email|| !password)
    {
        res.status(400);
        throw new Error("all fields are mandatory!!!!")

    }
    const availableUser = await User.findOne({email})
    if(availableUser)
    {
        res.status(400);
        throw new Error("user already registered")
    }
    const hashedPassword = await  bcrypt.hash(password,10);
    const user =  await User.create({
        userName,
        email,
        password:hashedPassword
    })
    res.status(201).json({
       "message":user
    })
})
export const loginUser =  asynchHandle(async (req,res)=>{
    const {email, password} =req.body;
    if(!email || !password)
    {
        res.status(400);
        throw new Error("all feilds are mandatory")
    }

    const user = await User.findOne({email})
    if(user&&(bcrypt.compare(password,user.password))){
        const accessToken = Jwt.sign({
            user:{
                userName:user.userName,
                email:user.email,
                id:user.id
            }, 

           
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1m"}
        
        )
        res.status(201).json({
            accessToken
        }
        )
    }
   
})

export const currentUser =  asynchHandle(async (req,res)=>{
    res.json({
       "message":"current user" 
    })
})