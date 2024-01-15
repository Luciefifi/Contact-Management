import express from 'express'
import { registerUser,
loginUser,
currentUser } from '../controllers/userController.js';
import { validateToken } from '../middlewares/validateTokenHandler.js';
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

userRouter.post('/register', registerUser)

userRouter.route('/login').post(loginUser)


userRouter.get('/current', validateToken ,currentUser)


