import express from 'express'
import { getAllContact, 
    createContact,
     getSingleContact,
      deleteContact,
       updateContact } from '../controllers/contactController.js';
const contactRouter = express.Router();

contactRouter.route('/').get(getAllContact) 

contactRouter.route('/').post(createContact) 

contactRouter.route('/:id').get(getSingleContact) 
contactRouter.route('/:id').put(updateContact) 
contactRouter.route('/:id').delete(deleteContact) 
    export default contactRouter
