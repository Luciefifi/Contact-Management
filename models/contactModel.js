import mongoose from "mongoose";
const contactSchema = mongoose.Schema({
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