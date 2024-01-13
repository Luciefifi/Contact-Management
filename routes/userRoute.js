import express from 'express'
import { registerUser,
loginUser,
currentUser } from '../controllers/userController.js';
export const userRouter = express.Router();

userRouter.route('/').post(registerUser)
userRouter.route('/').get((req,res)=>{
    res.json({
        "message":"get userss !!!"
    })
})

// userRouter.route('/:id').get((req,res)=>{
//     res.json({
//         "message":`get user with ${req.params.id} !!!`
//     })
// })

userRouter.route('/register').post(registerUser)

userRouter.route('/login').post(loginUser)


userRouter.route('/current').get(currentUser)


