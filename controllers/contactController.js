 import asyncHandle from 'express-async-handler'
 import { Contact } from '../models/contactModel.js'
 export const getAllContact = asyncHandle( async (req,res) =>{
    const contacts = await Contact.find({user_id: req.user?.id});

    if(!contacts){
        res.status(404);
        throw new Error("Contact not found !")
    }
    res.status(200).json({
        status:"success",
        "message":contacts
    })
 }
)
 export const createContact = asyncHandle (async (req,res) =>{
   

    const {name, email, phone} = req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All fields are required !!!")
    }
    const contact = await Contact.create(
       { name,
        email,
        phone,
        user_id: req.user.id
    }
    )

    res.status(201).json({
        status:"success",
        "message":contact
    })
 })
 
 export const getSingleContact = asyncHandle (async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact)
    {
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json({
        status:"success",
        "message":contact
    })
})

 
export const updateContact = asyncHandle (async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact)
    {
        res.status(404);
        throw new Error("contact not found")
    }
    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403)
        throw new Error("The user is not authorized")
    }
    const updatedContact = Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true})
    res.status(200).json({
        status:"success",
        "message":updatedContact
    })
}
)
 
export const deleteContact = asyncHandle( async (req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if(!contact)
    {
        res.status(404);
        throw new Error("contact not found")
    }
    if(contact.user_id.toString() !== req.user.id)
    {
        res.status(403)
        throw new Error("The user is not authorized to delete other contact")
    }
    await Contact.deleteOne({_id: req.params.id});
    res.json({
        "message":`delete a contact with ${req.params.id}`
    })
}
)