import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    userName :{
        type:String,
        required:[true, 'please add user name']

    },
    email :{
        type:String,
        required:[true, 'please add email'],
        unique:[true, 'this email already exist']

    },
    password :{
        type:String,
        required:[true, 'please add password']

    },
   

},
{
    timestamps:true,

}
)

 export const User = mongoose.model('User',userSchema)