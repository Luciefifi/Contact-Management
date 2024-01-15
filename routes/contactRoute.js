import express from 'express'
import { getAllContact, 
    createContact,
     getSingleContact,
      deleteContact,
       updateContact } from '../controllers/contactController.js';
import { validateToken } from '../middlewares/validateTokenHandler.js';
const contactRouter = express.Router();

contactRouter.get('/',validateToken, getAllContact) 
contactRouter.use(validateToken)
contactRouter.post('/', validateToken, createContact) 

contactRouter.route('/:id').get(getSingleContact) 
contactRouter.route('/:id').put(updateContact) 
contactRouter.route('/:id').delete(deleteContact) 
    export default contactRouter
