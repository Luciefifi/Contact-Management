import mongoose from "mongoose";
const contactSchema = mongoose.Schema({
   user_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User"

   },
    name :{
        type:String,
        required:[true, 'please add name']

    },
    email :{
        type:String,
        required:[true, 'please add email']

    },
    phone :{
        type:String,
        required:[true, 'please add phone']

    },
   

},
{
    timestamps:true,

}
)

 export const Contact = mongoose.model('Contact',contactSchema)