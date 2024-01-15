import asyncHandler from 'express-async-handler'
import  Jwt, { decode }  from 'jsonwebtoken'

export const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader= req.headers.Authorization || req.headers.authorization;
    if(authHeader &&authHeader.startsWith("Bearer")){
        token = authHeader.split(' ')[1]
        
        Jwt.verify(token , process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
            if(err){
                res.status(401)
                throw new Error("User is not authorized")
                
            }
            req.user=decoded.user;
            next()
            console.log(req.user)
            
        })
        if(!token)
        {
            res.status(401)
            throw new Error("user is not authorized or token is missing")
        }
    }
})